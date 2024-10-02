import { Comments } from "@prisma/client";
import { CommentsRepository } from "../../repositories/comments-repository";
import { ResourceNotFoundError } from "../errors/resource-not-found-error";

interface UpdateCommentUseCaseRequest {
  id: string;
  text: string;
  image: number | null;
  productId: string;
  userId: string;
}

interface UpdateCommentUseCaseResponse {
  comment: Comments;
}

export class UpdateCommentUseCase {
  constructor(private commentsRepository: CommentsRepository) {}

  async execute({
    id,
    image,
    productId,
    text,
    userId,
  }: UpdateCommentUseCaseRequest): Promise<UpdateCommentUseCaseResponse> {
    const resource = await this.commentsRepository.findById(id);

    if (!resource) {
      throw new ResourceNotFoundError();
    }
    const comment = await this.commentsRepository.update({
      productId,
      text,
      id,
      image,
      userId,
    });

    return {
      comment,
    };
  }
}
