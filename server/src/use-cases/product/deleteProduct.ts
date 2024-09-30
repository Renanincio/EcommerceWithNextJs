import { Product } from "@prisma/client";
import { ProductsRepository } from "../../repositories/products-repository";

interface DeleteProductUseCaseRequest {
  id: string;
}

interface DeleteProductUseCaseResponse {
  product: Product;
}

export class DeleteProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({
    id,
  }: DeleteProductUseCaseRequest): Promise<DeleteProductUseCaseResponse> {
    const product = await this.productsRepository.delete(id);

    if (!product) {
      throw new Error("Produto não encontrado");
    }

    return {
      product,
    };
  }
}
