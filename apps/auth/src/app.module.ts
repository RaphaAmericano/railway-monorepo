import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PassportModule } from '@nestjs/passport';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
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
    PassportModule,
    JwtModule.register({
      privateKey: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '600s' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, LocalStrategy, JwtStrategy],
})
export class AppModule {}
