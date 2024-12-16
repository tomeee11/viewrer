import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerConfigModule } from './shared/swagger/swagger.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.log(
    'Current NODE_ENV:',
    process.env.NODE_ENV,
    'PORT:',
    process.env.PORT ?? 3000,
  );

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );

  app.enableCors({
    origin: 'http://localhost:3000', // 개발 환경에서 허용할 도메인
  });

  SwaggerConfigModule.setupSwagger(app); // Swagger 설정

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
