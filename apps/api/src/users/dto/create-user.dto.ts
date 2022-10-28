import { Prisma } from '@prisma/client';

export class CreateUserDto implements Prisma.UserCreateInput {
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public createDate?: string | Date,
  ) {}
}
