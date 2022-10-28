"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.connectMicroservice({
        tranport: microservices_1.Transport.TCP,
        options: {
            host: 'localhost',
            port: process.env.PORT,
        },
    });
    await app.startAllMicroservices();
    await app.listen(process.env.PORT || 3002);
}
bootstrap();
//# sourceMappingURL=main.js.map