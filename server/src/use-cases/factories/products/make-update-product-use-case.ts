import { PrismaProductsRepository } from "../../repositories/prisma/prisma-products-repository";
import { UpdateProductUseCase } from "../product/updateProduct";

export function makeUpdateProductUseCase() {
  const productsRepository = new PrismaProductsRepository();
  const updateProductUseCase = new UpdateProductUseCase(productsRepository);

  return updateProductUseCase;
}
