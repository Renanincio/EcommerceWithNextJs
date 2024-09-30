import { PrismaProductsRepository } from "../../repositories/prisma/prisma-products-repository";
import { DeleteProductUseCase } from "../product/deleteProduct";

export function makeDeleteProductUseCase() {
  const productsRepository = new PrismaProductsRepository();
  const deleteProductUseCase = new DeleteProductUseCase(productsRepository);

  return deleteProductUseCase;
}
