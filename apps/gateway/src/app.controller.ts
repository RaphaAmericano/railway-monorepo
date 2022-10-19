import {
  Body,
  Controller,
  Get,
  Inject,
  OnModuleDestroy,
  OnModuleInit,
  Post,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  Client,
  ClientKafka,
  MessagePattern,
  Payload,
  Transport,
} from '@nestjs/microservices';
import { Producer } from 'kafkajs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('AUTH_PRODUCER') private kafkaProducer: Producer,
  ) {}

  @Get('kafka-test')
  testKafka() {
    // return this.producer
  }

  @Post('producer')
  async producer(@Body() body: any): Promise<string> {
    await this.kafkaProducer.send({
      topic: 'auth',
      messages: [{ key: 'cadastro', value: JSON.stringify(body) }],
    });
    return 'mensagem publicada';
  }
}
