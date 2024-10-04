import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { UserAlreadyExistsError } from "../../../use-cases/errors/user-already-exists-error";
import { makeRegisterProductUseCase } from "../../../use-cases/factories/products/make-register-product-use-case";

export async function RegisterProduct(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerBodySchema = z.object({
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
    registerBodySchema.parse(request.body);

  try {
    const registerProductUseCase = makeRegisterProductUseCase();

    const product = await registerProductUseCase.execute({
      price,
      description,
      name,
      color,
      category,
      info,
      datasheet,
      image,
    });

    return reply.status(201).send(product);
  } catch (err) {
    if (err instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: err.message });
    }

    throw err;
  }
}
