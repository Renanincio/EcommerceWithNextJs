import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryCommentsRepository } from "../../repositories/in-memory/in-memory-comments-repository";
import { DeleteCommentUseCase } from "./deleteComments";

let commentsRepository: InMemoryCommentsRepository;
let sut: DeleteCommentUseCase;

describe("Register Use Case", () => {
  beforeEach(() => {
    commentsRepository = new InMemoryCommentsRepository();
    sut = new DeleteCommentUseCase(commentsRepository);
  });
  it("should be possible to delete a comment", async () => {
    const comment = await commentsRepository.create({
      text: "teste",
      id: "comment01",
      image: null,
      productId: "product01",
      userId: "user01",
    });

    const storedComment = commentsRepository.items.find(
      (item) => item.id === comment.id,
    );

    expect(storedComment?.id).toBe(comment.id);

    await sut.execute({
      id: comment.id,
    });

    const deletedComment = commentsRepository.items.find(
      (item) => item.id === comment.id,
    );
    expect(deletedComment).toBeUndefined();
  });
});
