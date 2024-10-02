import { Product } from "@prisma/client";
import { ProductsRepository } from "../../repositories/products-repository";
import { ResourceNotFoundError } from "../errors/resource-not-found-error";

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
      throw new ResourceNotFoundError();
    }

    return {
      product,
    };
  }
}
