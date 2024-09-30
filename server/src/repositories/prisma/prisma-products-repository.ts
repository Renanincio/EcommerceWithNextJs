import { ProductsRepository } from "./../products-repository";
import { prisma } from "../../lib/prisma";
import { Prisma } from "@prisma/client";

export class PrismaProductsRepository implements ProductsRepository {
  async create(data: Prisma.ProductCreateInput) {
    const product = await prisma.product.create({
      data,
    });

    return product;
  }

  async get() {
    const products = await prisma.product.findMany();

    return products;
  }

  async update(data: Prisma.ProductCreateInput) {
    const product = await prisma.product.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });

    return product;
  }

  async delete(id: string) {
    const product = await prisma.product.delete({
      where: {
        id,
      },
    });

    return product;
  }
}
