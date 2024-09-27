import { RegisterProductUseCase } from "../registerProduct/registerProduct";

import { PrismaProductsRepository } from "../../repositories/prisma/prisma-products-repository";

export function makeRegisterProductUseCase() {
  const productsRepository = new PrismaProductsRepository();
  const registerProductUseCase = new RegisterProductUseCase(productsRepository);

  return registerProductUseCase;
}
