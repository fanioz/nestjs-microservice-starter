import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ServiceAService } from './service-a.service';

@Controller()
export class ServiceAController {
  constructor(private readonly serviceAService: ServiceAService) {}

  @EventPattern('hello_microservice_world')
  getHello(): string {
    return this.serviceAService.getHello();
  }
}
