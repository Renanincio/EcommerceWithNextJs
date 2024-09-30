import { Product } from "@prisma/client";
import { ProductsRepository } from "../../repositories/products-repository";

interface UpdateProductUseCaseRequest {
  price: number;
  description: string;
  name: string;
  color: string;
  category: string;
  info: string;
  datasheet: string;
  image: number;
}

interface UpdateProductUseCaseResponse {
  product: Product;
}

export class UpdateProductUseCase {
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
  }: UpdateProductUseCaseRequest): Promise<UpdateProductUseCaseResponse> {
    const product = await this.productsRepository.update({
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
