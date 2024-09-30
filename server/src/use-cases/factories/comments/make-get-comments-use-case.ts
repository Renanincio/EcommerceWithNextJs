import { PrismaCommentsRepository } from "../../../repositories/prisma/prisma-comments-repository";
import { GetCommentsUseCase } from "../../comments/comments";

export function makeGetCommentsUseCase() {
  const commentsRepository = new PrismaCommentsRepository();
  const getCommentsUseCase = new GetCommentsUseCase(commentsRepository);

  return getCommentsUseCase;
}
