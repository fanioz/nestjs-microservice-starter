import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiceAService {
  getHello(): string {
    console.log('Hello from service A');
    return 'Hello World!';
  }
}
