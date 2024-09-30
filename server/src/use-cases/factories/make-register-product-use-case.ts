import { PrismaProductsRepository } from "../../repositories/prisma/prisma-products-repository";
import { RegisterProductUseCase } from "../product/registerProduct";

export function makeRegisterProductUseCase() {
  const productsRepository = new PrismaProductsRepository();
  const registerProductUseCase = new RegisterProductUseCase(productsRepository);

  return registerProductUseCase;
}
