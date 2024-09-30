import { PrismaCommentsRepository } from "../../../repositories/prisma/prisma-comments-repository";
import { RegisterCommentUseCase } from "../../comments/registerComments";

export function makeRegisterCommentsUseCase() {
  const commentsRepository = new PrismaCommentsRepository();
  const registerCommentUseCase = new RegisterCommentUseCase(commentsRepository);

  return registerCommentUseCase;
}
