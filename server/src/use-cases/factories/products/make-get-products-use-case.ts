import { PrismaProductsRepository } from "../../repositories/prisma/prisma-products-repository";
import { GetProductsUseCase } from "../product/products";

export function makeGetProductsUseCase() {
  const productsRepository = new PrismaProductsRepository();
  const getProductsUseCase = new GetProductsUseCase(productsRepository);

  return getProductsUseCase;
}
