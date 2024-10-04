import { FastifyReply, FastifyRequest } from "fastify";
import { ResourceNotFoundError } from "../../../use-cases/errors/resource-not-found-error";
import { makeProductUseCase } from "../../../use-cases/factories/products/make-product-use-case";

export async function Product(request: FastifyRequest, reply: FastifyReply) {
  const { id } = request.params as { id: string };

  try {
    const ProductUseCase = makeProductUseCase();

    const product = await ProductUseCase.execute({ id });
    return reply.status(200).send(product);
  } catch (err) {
    if (err instanceof ResourceNotFoundError) {
      return reply.status(409).send({ message: err.message });
    }

    throw err;
  }
}
