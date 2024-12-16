import { Injectable } from '@nestjs/common';
import { CustomLoggerService } from 'src/shared/logger/logger.service';

@Injectable()
export class AppService {
  constructor(private logger: CustomLoggerService) {}
  getHello(): string {
    this.logger.log('Hello World logged');
    return 'Hello World!';
  }
}
