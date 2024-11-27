import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const useSSL =
  process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false;

const synchronize = process.env.MODE !== 'production';

export const databaseConfig: TypeOrmModuleOptions = {
  type: process.env.DB_CLIENT as any,
  url: process.env.DB_URL,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  ssl: useSSL,
  synchronize,
  logging: false,
  entities: [__dirname + '/../modules/**/*.entity.{js,ts}'],
  migrations: [],
  subscribers: [],
};
