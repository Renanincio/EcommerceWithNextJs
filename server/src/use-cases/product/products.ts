import { Product } from "@prisma/client";
import { ProductsRepository } from "../../repositories/products-repository";

interface GetProductsUseCaseResponse {
  products: Product[];
}

export class GetProductsUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute(): Promise<GetProductsUseCaseResponse> {
    const products = await this.productsRepository.getAll();

    return {
      products,
    };
  }
}
