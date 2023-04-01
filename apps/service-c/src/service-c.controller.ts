import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ServiceCService } from './service-c.service';

@Controller()
export class ServiceCController {
  constructor(private readonly serviceCService: ServiceCService) {}

  @EventPattern('hello_microservice_world')
  getHello(): string {
    return this.serviceCService.getHello();
  }
}
