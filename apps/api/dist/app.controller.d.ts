import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    auth(): Promise<string>;
    getTest(message: any): string;
}
