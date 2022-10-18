import { KafkaMessage } from '@nestjs/microservices/external/kafka.interface';
export declare class AppController {
    consumer(message: KafkaMessage): void;
}
