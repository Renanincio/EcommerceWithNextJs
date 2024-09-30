import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryCommentsRepository } from "../../repositories/in-memory/in-memory-comments-repository";
import { RegisterCommentUseCase } from "./registerComments";

let commentsRepository: InMemoryCommentsRepository;
let sut: RegisterCommentUseCase;

describe("Register Comments Use Case", () => {
  beforeEach(() => {
    commentsRepository = new InMemoryCommentsRepository();
    sut = new RegisterCommentUseCase(commentsRepository);
  });
  it("should be possible to create a comment", async () => {
    const { comment } = await sut.execute({
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
  });
});
