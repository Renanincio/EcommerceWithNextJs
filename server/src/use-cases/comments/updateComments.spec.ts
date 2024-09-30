import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryCommentsRepository } from "../../repositories/in-memory/in-memory-comments-repository";
import { UpdateCommentUseCase } from "./updateComments";

let commentsRepository: InMemoryCommentsRepository;
let sut: UpdateCommentUseCase;

describe("Update Comments Use Case", () => {
  beforeEach(() => {
    commentsRepository = new InMemoryCommentsRepository();
    sut = new UpdateCommentUseCase(commentsRepository);
  });

  it("should be possible to update a comment", async () => {
    const comment = await commentsRepository.create({
      id: "",
      text: "teste",
      image: null,
      productId: "product01",
      userId: "user01",
    });

    expect(commentsRepository.items).toContainEqual(comment);

    await sut.execute({
      text: "texto atualizado",
      id: comment.id,
      image: null,
      productId: "product01",
      userId: "user01",
    });

    const updatedComment = commentsRepository.items.find(
      (item) => item.id === comment.id,
    );

    expect(updatedComment?.text).toBe("texto atualizado");
  });
});
