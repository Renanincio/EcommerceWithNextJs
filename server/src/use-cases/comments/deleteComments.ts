import { Comments } from "@prisma/client";
import { CommentsRepository } from "../../repositories/comments-repository";
import { ResourceNotFoundError } from "../errors/resource-not-found-error";

interface DeleteCommentsUseCaseRequest {
  id: string;
}

interface DeleteCommentsUseCaseResponse {
  comments: Comments;
}

export class DeleteCommentUseCase {
  constructor(private commentsRepository: CommentsRepository) {}

  async execute({
    id,
  }: DeleteCommentsUseCaseRequest): Promise<DeleteCommentsUseCaseResponse> {
    const comments = await this.commentsRepository.delete(id);

    if (!comments) {
      throw new ResourceNotFoundError();
    }

    return {
      comments,
    };
  }
}
