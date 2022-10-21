import { Inject, Injectable } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';

@Injectable()
export class AppService {
  // constructor(
  //   @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  // ) {}

  // async onModuleInit() {
  //   // this.authClient.subscribeToResponseOf('auth');
  //   console.log(this.authClient);
  //   await this.authClient.connect();
  // }

  // getHello(): string {
  //   return 'Hello World!';
  // }
}
