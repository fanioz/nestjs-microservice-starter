import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ServiceCModule } from './service-c.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ServiceCModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3020,
        retryAttempts: 5,
        retryDelay: 10,
      },
    },
  );
  await app.listen();
  console.log('service C has started');
}
bootstrap();
