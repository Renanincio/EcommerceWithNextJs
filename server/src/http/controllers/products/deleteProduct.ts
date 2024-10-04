import { FastifyReply, FastifyRequest } from "fastify";
import { makeDeleteProductUseCase } from "../../../use-cases/factories/products/make-delete-product-use-case";
import { ResourceNotFoundError } from "../../../use-cases/errors/resource-not-found-error";

export async function DeleteProduct(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { id } = request.params as { id: string };

  try {
    const deleteProductUseCase = makeDeleteProductUseCase();
    await deleteProductUseCase.execute({ id });
    return reply.status(204).send();
  } catch (err) {
    if (err instanceof ResourceNotFoundError) {
      return reply.status(404).send({ message: "Product not found" });
    }
    console.error("Error deleting product:", err);
    return reply.status(500).send({ message: "Internal server error" });
  }
}
