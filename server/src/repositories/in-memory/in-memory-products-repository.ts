import { Prisma, Product } from "@prisma/client";
import { ProductsRepository } from "../products-repository";
import { randomUUID } from "crypto";

export class InMemoryProductsRepository implements ProductsRepository {
  public items: Product[] = [];

  async create(data: Prisma.ProductCreateInput) {
    const product = {
      id: randomUUID(),
      name: data.name,
      price: data.price,
      info: data.info,
      datasheet: data.datasheet,
      category: data.category,
      description: data.description,
      color: data.color,
      image: data.image,
    };

    this.items.push(product);

    return product;
  }
}
