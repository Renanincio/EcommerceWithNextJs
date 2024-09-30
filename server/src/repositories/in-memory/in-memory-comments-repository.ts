import { Comments } from "@prisma/client";
import { randomUUID } from "crypto";
import { CommentsRepository } from "../comments-repository";

export class InMemoryCommentsRepository implements CommentsRepository {
  public items: Comments[] = [];

  async create(data: Comments) {
    const comment = {
      id: randomUUID(),
      text: data.text,
      image: data.image ? data.image : null,
      userId: data.userId,
      productId: data.productId,
    };

    this.items.push(comment);

    return comment;
  }

  async get() {
    const comments = this.items;

    return comments;
  }

  async update(data: Comments) {
    const commentIndex = this.items.findIndex(
      (comment) => comment.id === data.id,
    );

    if (commentIndex === -1) {
      throw new Error("Produto não encontrado");
    }

    const updatedComment = {
      ...this.items[commentIndex],
      ...data,
    };

    this.items[commentIndex] = updatedComment as Comments;

    return updatedComment;
  }

  async delete(id: string) {
    const commentIndex = this.items.findIndex((comment) => comment.id === id);

    if (commentIndex === -1) {
      throw new Error("Produto não encontrado");
    }

    const deletedComment = this.items[commentIndex];

    this.items.splice(commentIndex, 1);

    return deletedComment;
  }
}
