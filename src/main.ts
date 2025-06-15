import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.enableCors();

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }))

    const config = new DocumentBuilder()
    .setTitle('Sistema Bitácora Médica API')
    .setDescription('API para el sistema de gestión de bitácora médica')
    .setVersion('1.0')
    .addTag('usuarios', 'Gestión de usuarios del sistema')
    .addTag('tipos', 'Catálogos y tipos de datos')
    .addTag('pacientes', 'Gestión de datos de pacientes')
    .addTag('bitacora', 'Registro de procedimientos médicos')
    .addTag('educacion', 'Educación continuada')
    .addTag('articulos', 'Artículos científicos')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Introduce tu token JWT',
        in: 'header',
      },
      'JWT-auth',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  await app.listen(configService.get('PORT') || 4000);
}
bootstrap();
