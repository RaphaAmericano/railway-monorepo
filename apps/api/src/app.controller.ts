import { Controller } from '@nestjs/common';
import {
  Ctx,
  KafkaContext,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';
import { Producer } from '@nestjs/microservices/external/kafka.interface';
import { AppService } from './app.service';

@Controller('auth')
export class AppController {
  constructor() {}

  // @MessagePattern('teste')
  // readMessage(@Payload() message: any, @Ctx() context: KafkaContext) {
  //   console.log(message);
  //   const originalMessage = context.getMessage();
  //   const response = `Receiveng message from ${JSON.stringify(
  //     originalMessage.value,
  //   )}`;
  //   console.log(response);
  //   return response;
  // }
}
