import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { UserAlreadyExistsError } from "../../../use-cases/errors/user-already-exists-error";
import { makeDeleteProductUseCase } from "../../../use-cases/factories/make-delete-product";

export async function DeleteProduct(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const deleteBodySchema = z.object({
    id: z.string(),
  });

  const { id } = deleteBodySchema.parse(request.body);

  try {
    const deleteProductUseCase = makeDeleteProductUseCase();

    await deleteProductUseCase.execute({
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
