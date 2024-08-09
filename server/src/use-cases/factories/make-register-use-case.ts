import { RegisterUseCase } from "../register/register";
import { PrismaUsersRepository } from "../../repositories/prisma/prisma-users-repository";

export function makeRegisterUseCase() {
  const usersRepository = new PrismaUsersRepository();
  const registerUseCase = new RegisterUseCase(usersRepository);

  return registerUseCase;
}
