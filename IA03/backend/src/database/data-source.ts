import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config();

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('DATABASE_URL is not set');
}

const url = new URL(databaseUrl);

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: url.hostname,
  port: parseInt(url.port || '5432', 10),
  username: url.username || 'postgres',
  password: url.password || 'postgres',
  database: url.pathname.substring(1) || 'user',
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/database/migrations/*.ts'],
  synchronize: false,
  logging: true,
  extra: {
    family: 4,
  },
});
