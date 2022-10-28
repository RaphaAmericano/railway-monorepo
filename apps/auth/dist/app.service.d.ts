import { JwtService } from '@nestjs/jwt';
export declare class AppService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    login(user: any): Promise<{
        token: string;
    }>;
    validateUser(user: {
        password: string;
    }, password: string): Promise<{
        password: string;
    }>;
}
