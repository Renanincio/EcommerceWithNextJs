import { PrismaCommentsRepository } from "../../../repositories/prisma/prisma-comments-repository";
import { DeleteCommentUseCase } from "../../comments/deleteComments";

export function makeDeleteCommentUseCase() {
  const commentsRepository = new PrismaCommentsRepository();
  const deleteCommentUseCase = new DeleteCommentUseCase(commentsRepository);

  return deleteCommentUseCase;
}
