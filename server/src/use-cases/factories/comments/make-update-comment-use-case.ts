import { PrismaCommentsRepository } from "../../../repositories/prisma/prisma-comments-repository";
import { UpdateCommentUseCase } from "../../comments/updateComments";

export function makeUpdateCommentsUseCase() {
  const commentsRepository = new PrismaCommentsRepository();
  const updateCommentUseCase = new UpdateCommentUseCase(commentsRepository);

  return updateCommentUseCase;
}
