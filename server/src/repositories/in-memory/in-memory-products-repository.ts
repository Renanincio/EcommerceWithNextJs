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

  async get() {
    const products = this.items;

    return products;
  }

  async findById(id: string) {
    const product = this.items.find((product) => product.id === id);

    if (!product) {
      return null;
    }

    return product;
  }

  async update(data: Prisma.ProductCreateInput) {
    const productIndex = this.items.findIndex(
      (product) => product.id === data.id,
    );

    if (productIndex === -1) {
      throw new Error("Produto não encontrado");
    }

    const updatedProduct = {
      ...this.items[productIndex],
      ...data,
    };

    this.items[productIndex] = updatedProduct as Product;

    return updatedProduct;
  }

  async delete(id: string) {
    const productIndex = this.items.findIndex((product) => product.id === id);

    if (productIndex === -1) {
      throw new Error("Produto não encontrado");
    }

    const deletedProduct = this.items[productIndex];

    this.items.splice(productIndex, 1);

    return deletedProduct;
  }
}
