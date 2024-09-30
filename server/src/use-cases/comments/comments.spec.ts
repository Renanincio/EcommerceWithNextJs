import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryCommentsRepository } from "../../repositories/in-memory/in-memory-comments-repository";
import { GetCommentsUseCase } from "./comments";

let commentsRepository: InMemoryCommentsRepository;
let sut: GetCommentsUseCase;

describe("Get Comments Use Case", () => {
  beforeEach(() => {
    commentsRepository = new InMemoryCommentsRepository();
    sut = new GetCommentsUseCase(commentsRepository);
  });

  it("should be possible to find comments", async () => {
    const comment1 = await commentsRepository.create({
      text: "teste",
      id: "comment01",
      image: null,
      productId: "product01",
      userId: "user01",
    });

    const comment2 = await commentsRepository.create({
      text: "teste",
      id: "comment02",
      image: null,
      productId: "product01",
      userId: "user01",
    });

    const { comments } = await sut.execute();

    expect(comments).toHaveLength(2);
    expect(comments).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ text: "teste", id: comment1.id }),
        expect.objectContaining({ text: "teste", id: comment2.id }),
      ]),
    );
  });
});
