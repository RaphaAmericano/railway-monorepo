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
    //     name: 'API_SERVICE',
    //     transport: Transport.KAFKA,
    //     options: {
    //       client: {
    //         clientId: 'api',
    //         brokers: [process.env.UPSTASH_KAFKA_REST_URL],
    //       },
    //       consumer: {
    //         groupId: `auth`,
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
