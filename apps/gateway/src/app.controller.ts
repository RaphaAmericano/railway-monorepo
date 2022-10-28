import {
  Body,
  Controller,
  Get,
  Inject,
  OnModuleInit,
  Post,
} from '@nestjs/common';
import { ClientKafka, ClientProxy } from '@nestjs/microservices';
import { Producer } from 'kafkajs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // @Inject('AUTH_PRODUCER') private kafkaProducer: Producer,
  // private appService: AppService,
  // constructor(@Inject('AUTH_SERVICE') private client: ClientProxy) {}
  constructor(private appService: AppService) {}
  
  @Post('auth')
  async auth(@Body() body: any) {
    return this.appService.sendAuth(body);
  }

  @Post('users')
  async createUser(@Body() body: any) {
    return this.appService.createUser(body);
  }

  // @Post('notes')
  // async producer(@Body() body: any): Promise<string> {
  //   await this.kafkaProducer.send({
  //     topic: 'auth',
  //     messages: [{ key: 'cadastro', value: JSON.stringify(body) }],
  //   });
  //   return 'mensagem publicada';
  // }
}
