import { Product } from "@prisma/client";
import { ProductsRepository } from "../../repositories/products-repository";
import { ResourceNotFoundError } from "../errors/resource-not-found-error";

interface UpdateProductUseCaseRequest {
  price: number;
  description: string;
  name: string;
  color: string;
  category: string;
  info: string;
  datasheet: string;
  image: number;
  id: string;
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
    id,
  }: UpdateProductUseCaseRequest): Promise<UpdateProductUseCaseResponse> {
    const productExists = await this.productsRepository.findById(id);

    if (!productExists) {
      throw new ResourceNotFoundError();
    }

    const product = await this.productsRepository.update({
      price,
      description,
      category,
      color,
      datasheet,
      image,
      info,
      name,
      id,
    });

    return {
      product,
    };
  }
}
