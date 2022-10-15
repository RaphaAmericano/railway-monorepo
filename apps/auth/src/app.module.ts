import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientKafka, ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // ClientsModule.register([
    //   {
    //     name: 'KAFKA_SERVICE',
    //     transport: Transport.KAFKA,
    //     options: {
    //       client: {
    //         brokers: [process.env.UPSTASH_KAFKA_REST_URL],
    //       },
    //       consumer: {
    //         groupId: `auth-producer`,
    //       },
    //     },
    //   },
    // ]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: 'KAFKA_PRODUCER',
    //   useFactory: async (kafkaClient: ClientKafka) => {
    //     return kafkaClient.connect();
    //   },
    //   inject: ['KAFKA_SERVICE'],
    // },
  ],
})
export class AppModule {}
