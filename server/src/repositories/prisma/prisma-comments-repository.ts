import { Prisma } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { CommentsRepository } from "../comments-repository";

export class PrismaCommentsRepository implements CommentsRepository {
  async create(data: Prisma.CommentsCreateInput) {
    const product = await prisma.comments.create({
      data,
    });

    return product;
  }
}
