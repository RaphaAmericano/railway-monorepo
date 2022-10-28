import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientKafka, ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ClientsModule.register([
      // {
      //   name: 'AUTH_SERVICE',
      //   transport: Transport.KAFKA,
      //   options: {
      //     client: {
      //       brokers: [
      //         `${process.env.UPSTASH_KAFKA_REST_URL}:${process.env.UPSTASH_KAFKA_REST_PORT}`,
      //       ],
      //       ssl: true,
      //       sasl: {
      //         mechanism: 'scram-sha-256',
      //         username: process.env.UPSTASH_KAFKA_REST_USERNAME,
      //         password: process.env.UPSTASH_KAFKA_REST_PASSWORD,
      //       },
      //     },
      //   },
      // },
      {
        name: 'AUTH_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3001,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'AUTH_PRODUCER',
      useFactory: async (kafkaService: ClientKafka) => {
        return kafkaService.connect();
      },
      inject: ['AUTH_SERVICE'],
    },
  ],
})
export class AppModule {}
