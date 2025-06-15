import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Cie10 } from "src/domain/cie10/entity/cie10.entity";
import { Cups } from "src/domain/cups/entity/cups.entity";

export const getPostgreSQLConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions =>{
  const config: TypeOrmModuleOptions = {
    name: 'default',
    type: 'postgres',
    host:configService.get<string>('DB_HOST'),
    port:configService.get<number>('DB_PORT'),
    username:configService.get<string>('DB_USERNAME'),
    password:configService.get<string>('DB_PASSWORD'),
    database:configService.get<string>('DB_NAME'),
    entities:[
        Cie10,
        Cups
    ],
    synchronize: false,
    logging: false,
    ssl:{
      rejectUnauthorized: false,
    }
  };

  return config;
}