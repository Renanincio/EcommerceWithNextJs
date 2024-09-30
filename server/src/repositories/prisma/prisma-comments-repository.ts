import { Comments } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { CommentsRepository } from "../comments-repository";

export class PrismaCommentsRepository implements CommentsRepository {
  async create(data: Comments) {
    const product = await prisma.comments.create({
      data: {
        id: data.id,
        text: data.text,
        image: data.image,
        user: {
          connect: { id: data.userId },
        },
        product: {
          connect: { id: data.productId },
        },
      },
    });

    return product;
  }

  async get() {
    const comments = await prisma.comments.findMany();

    return comments;
  }

  async update(data: Comments) {
    const comment = await prisma.comments.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });

    return comment;
  }

  async delete(id: string) {
    const comment = await prisma.comments.delete({
      where: {
        id,
      },
    });

    return comment;
  }
}
