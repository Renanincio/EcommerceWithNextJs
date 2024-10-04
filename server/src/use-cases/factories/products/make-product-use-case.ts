import { PrismaProductsRepository } from "../../../repositories/prisma/prisma-products-repository";
import { ProductUseCase } from "../../product/product-use-case";

export function makeProductUseCase() {
  const productRepository = new PrismaProductsRepository();
  const productUseCase = new ProductUseCase(productRepository);

  return productUseCase;
}
