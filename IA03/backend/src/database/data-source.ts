import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config();

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('DATABASE_URL is not set');
}

const url = new URL(databaseUrl);

// Determine if SSL is required based on the hostname or explicit sslmode parameter
const isRemoteDB = !['localhost', '127.0.0.1'].includes(url.hostname);
const sslMode = url.searchParams.get('sslmode');

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
  ssl: isRemoteDB || sslMode === 'require' ? { rejectUnauthorized: false } : false,
  extra: {
    family: 4,
  },
});
