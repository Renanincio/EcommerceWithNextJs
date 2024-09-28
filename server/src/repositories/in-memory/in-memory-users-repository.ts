import { User, Prisma } from "@prisma/client";
import { UsersRepository } from "../../repositories/users-repository";
import { randomUUID } from "crypto";

export class InMemoryUsersRepository implements UsersRepository {
  public items: User[] = [];

  async create(data: Prisma.UserCreateInput) {
    const user = {
      id: randomUUID(),
      name: data.name,
      email: data.email,
      password: data.password,
      created_at: new Date(),
    };

    this.items.push(user);

    return user;
  }
}
