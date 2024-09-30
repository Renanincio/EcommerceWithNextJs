import { Comments } from "@prisma/client";
import { CommentsRepository } from "../../repositories/comments-repository";

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
