import { Comments, Prisma } from "@prisma/client";
import { randomUUID } from "crypto";
import { CommentsRepository } from "../comments-repository";

export class InMemoryCommentsRepository implements CommentsRepository {
  public items: Comments[] = [];

  async create(data: Prisma.CommentsCreateInput) {
    const comment = {
      id: randomUUID(),
      text: data.text,
      image: data.image ? data.image : null,
      userId: data.user.connect?.id ? data.user.connect?.id : "",
      productId: data.product.connect?.id ? data.product.connect?.id : "",
    };

    this.items.push(comment);

    return comment;
  }
}
