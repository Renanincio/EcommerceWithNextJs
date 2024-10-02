import { Prisma, Product } from "@prisma/client";

export interface ProductsRepository {
  create(data: Prisma.ProductCreateInput): Promise<Product>;
  update(data: Prisma.ProductCreateInput): Promise<Product>;
  delete(id: string): Promise<Product>;
  get(): Promise<Product[]>;
  findById(id: string): Promise<Product | null>;
}
