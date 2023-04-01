import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH_SERVICE_C') private readonly authClient: ClientProxy,
    @Inject('DATA_SERVICE_A') private readonly dataClient: ClientProxy,
  ) {}

  getHello() {
    this.authClient.emit('hello_microservice_world', 'Hello World!');
    this.dataClient.emit('hello_microservice_world', 'Hello World!');
    console.log('Hello command sent to service A and C');
    return 'Hello World!';
  }
}
