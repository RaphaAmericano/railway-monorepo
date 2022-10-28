import { Inject, Injectable } from '@nestjs/common';
import {
  ClientKafka,
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { Producer } from 'kafkajs';
import { hashSync } from 'bcrypt';

@Injectable()
export class AppService {
  private authClient: ClientProxy;
  private apiClient: ClientProxy;

  constructor() {
    this.authClient = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 3001,
      },
    });
    this.apiClient = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 3002,
      },
    });
  }

  public createUser(data: any) {
    return this.apiClient.send<any>('user-new', {
      ...data,
      password: hashSync(data.password, 10),
    });
  }

  public sendAuth(data: any) {
    return this.authClient.send<any>('auth', data);
  }
  // @Inject('AUTH_SERVICE') private readonly clientKafka: ClientKafka, // @Inject('AUTH_PRODUCER') private kafkaProducer: Producer,

  // async authUser(body: any) {
  //   return this.kafkaProducer.send({
  //     topic: 'auth',
  //     messages: [{ key: 'user', value: JSON.stringify(body) }],
  //   });
  // }

  // emitAuth(body: any) {
  //   this.clientKafka.emit('auth_created', JSON.stringify(body));
  // }

  // createAuth(body: any) {
  //   return this.clientKafka.send('auth_user', body);
  // }
}
