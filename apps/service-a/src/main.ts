import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ServiceAModule } from './service-a.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ServiceAModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3010,
        retryAttempts: 5,
        retryDelay: 10,
      },
    },
  );
  await app.listen();
  console.log('service A started');
}
bootstrap();
