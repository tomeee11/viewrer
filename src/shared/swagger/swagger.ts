import { DocumentBuilder } from '@nestjs/swagger';

export function createSwaggerConfig() {
  const version = '1.0';

  return new DocumentBuilder()
    .setTitle('My API')
    .setDescription('The API description')
    .setVersion(version)
    .addBearerAuth()
    .build();
}
