"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.connectMicroservice({
        transport: microservices_1.Transport.KAFKA,
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
    await app.listen(process.env.PORT || 3001);
}
bootstrap();
//# sourceMappingURL=main.js.map