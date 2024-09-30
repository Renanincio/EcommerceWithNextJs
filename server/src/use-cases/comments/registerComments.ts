import { Comments } from "@prisma/client";
import { CommentsRepository } from "../../repositories/comments-repository";

interface RegisterCommentUseCaseRequest {
  id: string;
  text: string;
  image: number | null;
  productId: string;
  userId: string;
}

interface RegisterCommentUseCaseResponse {
  comment: Comments;
}

export class RegisterCommentUseCase {
  constructor(private commentsRepository: CommentsRepository) {}

  async execute({
    id,
    text,
    image,
    productId,
    userId,
  }: RegisterCommentUseCaseRequest): Promise<RegisterCommentUseCaseResponse> {
    const comment = await this.commentsRepository.create({
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
