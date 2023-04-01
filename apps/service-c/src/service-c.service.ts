import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiceCService {
  getHello(): string {
    console.log('Hello from service C');
    return 'Hello World!';
  }
}
