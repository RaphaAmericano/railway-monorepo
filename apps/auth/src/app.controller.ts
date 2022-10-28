import { Controller, Inject, OnModuleInit } from '@nestjs/common';
import {
  ClientKafka,
  Ctx,
  EventPattern,
  KafkaContext,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';
import { KafkaMessage } from '@nestjs/microservices/external/kafka.interface';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // constructor(
  //   private appService: AppService,
  //   @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  // ) {}

  // onModuleInit() {
  //   this.authClient.subscribeToResponseOf('main');
  // }

  // @MessagePattern('auth')
  // auth(@Payload() message: KafkaMessage, @Ctx() context: KafkaContext) {
  //   console.log(message);
  //   return 'teste';
  // }

  // @EventPattern('auth')
  // handleAuthCreated(data: any) {
  //   console.log(data);
  // console.log(this.authClient);
  // this.authClient.emit('main', data);
  // .subscribe((res) => {
  //   console.log(`Subscribe response`, res);
  // });
  // }

  // @MessagePattern('auth')
  // handleAuth(data: any) {
  //   return { pattern: true, ...data };
  // }

  @MessagePattern('auth')
  auth(data: any) {
    console.log('auth', data);
    return { test: true, ...data };
  }
}
