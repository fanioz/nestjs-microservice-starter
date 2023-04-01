import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ClientsModule.register([
    {
      name: 'DATA_SERVICE_A',
      transport: Transport.TCP,
      options: { port: 3010 },
    },
    {
      name: 'AUTH_SERVICE_C',
      transport: Transport.TCP,
      options: { port: 3020 },
    },
  ])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
