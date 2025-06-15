import { registerAs } from "@nestjs/config";

export default registerAs('configuration', () => ({
  PORT: parseInt(process.env.PORT ?? '4000', 10),
  FRONTEND_SERVER_URL: process.env.FRONTEND_SERVER_URL ?? '',
  ENVIROMENT: process.env.NODE_ENV ?? 'development',

  POSTGRESQL:{
    DB_HOST: process.env.DB_HOST ?? 'localhost',
    DB_PORT: parseInt(process.env.DB_PORT ?? '5432', 10),
    DB_USERNAME: process.env.DB_USERNAME ?? 'user',
    DB_PASSWORD: process.env.DB_PASSWORD ?? '123456',
    DB_NAME: process.env.DB_NAME ?? 'database',
  }
}));