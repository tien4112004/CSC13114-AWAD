import { Logger } from '@nestjs/common/services/logger.service';
import { registerAs } from '@nestjs/config';

export default registerAs('database', () => {
  const databaseUrl = process.env.DATABASE_URL;
  const logger = new Logger('DatabaseConfig');

  if (!databaseUrl) {
    logger.warn(
      'DATABASE_URL is not set. Falling back to individual environment variables.',
    );
  }

  const url = new URL(String(databaseUrl));

  return {
    host: url.hostname,
    port: parseInt(url.port || '5432', 10),
    username: url.username || 'postgres',
    password: url.password || 'postgres',
    database: url.pathname.substring(1) || 'user',
    type: 'postgres' as const,
  };
});
