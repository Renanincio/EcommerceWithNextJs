import { FastifyReply, FastifyRequest } from "fastify";
import { makeGetProductsUseCase } from "../../../use-cases/factories/products/make-get-products-use-case";

export async function Products(request: FastifyRequest, reply: FastifyReply) {
  const getProducts = makeGetProductsUseCase();

  const { products } = await getProducts.execute();

  return reply.status(200).send({
    products,
  });
}
