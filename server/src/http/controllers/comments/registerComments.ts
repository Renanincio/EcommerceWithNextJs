import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { UserAlreadyExistsError } from "../../../use-cases/errors/user-already-exists-error";
import { makeRegisterCommentsUseCase } from "../../../use-cases/factories/comments/make-register-comment-use-case";

export async function RegisterComments(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerBodySchema = z.object({
    id: z.string(),
    text: z.string(),
    image: z.number().nullable(),
    userId: z.string(),
    productId: z.string(),
  });

  const { id, image, productId, text, userId } = registerBodySchema.parse(
    request.body,
  );

  try {
    const registerCommentUseCase = makeRegisterCommentsUseCase();

    const comment = await registerCommentUseCase.execute({
      id,
      image,
      productId,
      text,
      userId,
    });

    return reply.status(201).send(comment);
  } catch (err) {
    if (err instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: err.message });
    }

    throw err;
  }
}
