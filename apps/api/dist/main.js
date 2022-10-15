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
                clientId: 'api',
                brokers: [
                    `${process.env.UPSTASH_KAFKA_REST_URL}:${process.env.UPSTASH_KAFKA_REST_PORT}`,
                ],
            },
            consumer: {
                groupId: `microservice`,
            },
        },
    });
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map