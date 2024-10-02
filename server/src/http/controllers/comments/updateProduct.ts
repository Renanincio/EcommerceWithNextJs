import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { ProductDoesNotExists } from "../../../use-cases/errors/product-does-not-exists";
import { makeUpdateCommentsUseCase } from "../../../use-cases/factories/comments/make-update-comment-use-case";

export async function UpdateComment(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const updateBodySchema = z.object({
    id: z.string(),
    text: z.string(),
    image: z.number().nullable(),
    userId: z.string(),
    productId: z.string(),
  });

  const { id, image, productId, text, userId } = updateBodySchema.parse(
    request.body,
  );

  try {
    const updateCommentUseCase = makeUpdateCommentsUseCase();

    await updateCommentUseCase.execute({
      id,
      image,
      productId,
      text,
      userId,
    });
  } catch (err) {
    if (err instanceof ProductDoesNotExists) {
      return reply.status(409).send({ message: err.message });
    }

    throw err;
  }

  return reply.status(201).send();
}
