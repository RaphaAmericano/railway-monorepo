import { Injectable } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';

@Injectable()
export class AppService {
  async onModuleInit() {
    // this.client.subscribeToResponseOf('test');
    // await this.client.connect();
  }

  getHello(): string {
    return 'Hello World!';
  }

  getTest() {
    // return this.client.send('test', 'Teste completo');
  }
}
