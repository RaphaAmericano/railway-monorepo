import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    // transport: Transport.KAFKA,
    // options: {
    //   client: {
    //     brokers: [
    //       `${process.env.UPSTASH_KAFKA_REST_URL}:${process.env.UPSTASH_KAFKA_REST_PORT}`,
    //     ],
    //     ssl: true,
    //     sasl: {
    //       mechanism: process.env.UPSTASH_KAFKA_REST_MECHANISM,
    //       username: process.env.UPSTASH_KAFKA_REST_USERNAME,
    //       password: process.env.UPSTASH_KAFKA_REST_PASSWORD,
    //     },
    //   },
    // },
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: process.env.PORT,
    },
  });
  await app.listen();
}
bootstrap();
