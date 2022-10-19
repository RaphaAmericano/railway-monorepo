import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientKafka, ClientsModule, Transport } from '@nestjs/microservices';
import { Mechanism } from 'kafkajs';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: [
              `${process.env.UPSTASH_KAFKA_REST_URL}:${process.env.UPSTASH_KAFKA_REST_PORT}`,
            ],
            ssl: true,
            sasl: {
              mechanism: 'scram-sha-256',
              username: process.env.UPSTASH_KAFKA_REST_USERNAME,
              password: process.env.UPSTASH_KAFKA_REST_PASSWORD,
            },
          },
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
      inject: ['KAFKA_SERVICE'],
    },
  ],
})
export class AppModule {}
