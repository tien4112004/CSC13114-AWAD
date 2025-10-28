import {
  ValidationPipe,
  Logger,
  ValidationError,
  BadRequestException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Main');

  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidUnknownValues: true,
      exceptionFactory: (errors: ValidationError[]) => {
        const firstError = errors[0];
        const firstConstraint = Object.values(firstError.constraints || {})[0];
        throw new BadRequestException(firstConstraint);
      },
    }),
  );

  const configService = app.get(ConfigService);
  const port = configService.get('app.port');

  await app.listen(port);
  logger.log(`Application is running on port ${port}`);
  logger.log(`22120368`);
}
bootstrap();
