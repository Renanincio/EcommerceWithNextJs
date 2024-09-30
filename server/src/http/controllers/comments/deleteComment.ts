import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { UserAlreadyExistsError } from "../../../use-cases/errors/user-already-exists-error";
import { makeDeleteCommentUseCase } from "../../../use-cases/factories/comments/make-delete-comment-use-case";

export async function DeleteComment(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const deleteBodySchema = z.object({
    id: z.string(),
  });

  const { id } = deleteBodySchema.parse(request.body);

  try {
    const deleteCommentUseCase = makeDeleteCommentUseCase();

    await deleteCommentUseCase.execute({
      id,
    });
  } catch (err) {
    if (err instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: err.message });
    }

    throw err;
  }

  return reply.status(201).send();
}
