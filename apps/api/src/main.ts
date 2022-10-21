import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: [
          `${process.env.UPSTASH_KAFKA_REST_URL}:${process.env.UPSTASH_KAFKA_REST_PORT}`,
        ],
        ssl: true,
        sasl: {
          mechanism: process.env.UPSTASH_KAFKA_REST_MECHANISM,
          username: process.env.UPSTASH_KAFKA_REST_USERNAME,
          password: process.env.UPSTASH_KAFKA_REST_PASSWORD,
        },
      },
    },
  });
  await app.startAllMicroservices();

  await app.listen(process.env.PORT || 3002);
}
bootstrap();
