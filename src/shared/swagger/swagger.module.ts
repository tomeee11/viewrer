import { Module } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { createSwaggerConfig } from './swagger';

@Module({})
export class SwaggerConfigModule {
  static setupSwagger(app: any) {
    const config = createSwaggerConfig();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }
}
