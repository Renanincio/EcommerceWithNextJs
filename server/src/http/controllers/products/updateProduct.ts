import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { UserAlreadyExistsError } from "../../../use-cases/errors/user-already-exists-error";
import { makeUpdateProductUseCase } from "../../../use-cases/factories/make-update-product";

export async function UpdateProduct(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const updateBodySchema = z.object({
    price: z.number(),
    description: z.string(),
    name: z.string(),
    color: z.string(),
    category: z.string(),
    info: z.string(),
    datasheet: z.string(),
    image: z.number(),
  });

  const { price, description, name, color, category, info, datasheet, image } =
    updateBodySchema.parse(request.body);

  try {
    const updateProductUseCase = makeUpdateProductUseCase();

    await updateProductUseCase.execute({
      price,
      description,
      name,
      color,
      category,
      info,
      datasheet,
      image,
    });
  } catch (err) {
    if (err instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: err.message });
    }

    throw err;
  }

  return reply.status(201).send();
}
