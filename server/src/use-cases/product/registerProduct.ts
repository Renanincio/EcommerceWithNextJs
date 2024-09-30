import { Product } from "@prisma/client";
import { ProductsRepository } from "../../repositories/products-repository";

interface RegisterProductUseCaseRequest {
  price: number;
  description: string;
  name: string;
  color: string;
  category: string;
  info: string;
  datasheet: string;
  image: number;
}

interface RegisterProductUseCaseResponse {
  product: Product;
}

export class RegisterProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({
    price,
    description,
    category,
    color,
    datasheet,
    image,
    info,
    name,
  }: RegisterProductUseCaseRequest): Promise<RegisterProductUseCaseResponse> {
    const product = await this.productsRepository.create({
      price,
      description,
      category,
      color,
      datasheet,
      image,
      info,
      name,
    });

    return {
      product,
    };
  }
}
