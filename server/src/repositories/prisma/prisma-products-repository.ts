import { Prisma } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { ProductsRepository } from "./../products-repository";

export class PrismaProductsRepository implements ProductsRepository {
  async create(data: Prisma.ProductCreateInput) {
    const product = await prisma.product.create({
      data,
    });

    return product;
  }

  async getAll() {
    const products = await prisma.product.findMany();

    return products;
  }

  async findById(id: string) {
    const product = await prisma.product.findFirst({
      where: {
        id,
      },
    });

    return product;
  }

  async update(id: string, data: Prisma.ProductCreateInput) {
    try {
      const product = await prisma.product.update({
        where: { id },
        data: { ...data },
      });

      return product;
    } catch (error) {
      console.error("Erro ao atualizar o produto no banco de dados:", error);
      throw new Error("Erro ao atualizar o produto");
    }
  }

  async delete(id: string) {
    const product = await prisma.product.delete({
      where: { id },
    });
    return product;
  }
}
