import { Controller, Get, Inject } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Producer } from '@nestjs/microservices/external/kafka.interface';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, // @Inject('KAFKA_PRODUCER') private kafkaProducer: Producer,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('auth')
  async auth() {
    // await this.kafkaProducer.send({
    //   topic: 'auth',
    //   messages: [
    //     {
    //       key: 'auth',
    //       value: 'String teste',
    //     },
    //   ],
    // });
    return 'auth';
  }

  @MessagePattern('test')
  getTest(@Payload() message) {
    return 'Funcionou';
  }
}
