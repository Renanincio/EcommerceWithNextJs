import { Product } from "@prisma/client";
import { ProductsRepository } from "../../repositories/products-repository";
import { ResourceNotFoundError } from "../errors/resource-not-found-error";

interface ProductUseCaseRequest {
  id: string;
}

interface ProductUseCaseResponse {
  product: Product;
}

export class ProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({
    id,
  }: ProductUseCaseRequest): Promise<ProductUseCaseResponse> {
    const product = await this.productsRepository.findById(id);

    if (!product) {
      throw new ResourceNotFoundError();
    }

    return {
      product,
    };
  }
}
