import { FastifyReply, FastifyRequest } from "fastify";
import { makeGetCommentsUseCase } from "../../../use-cases/factories/comments/make-get-comments-use-case";

export async function Comments(request: FastifyRequest, reply: FastifyReply) {
  const getComments = makeGetCommentsUseCase();

  const { comments } = await getComments.execute();

  return reply.status(200).send({
    comments,
  });
}
