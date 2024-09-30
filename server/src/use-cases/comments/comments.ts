import { Comments } from "@prisma/client";
import { CommentsRepository } from "../../repositories/comments-repository";

interface GetCommentsUseCaseResponse {
  comments: Comments[];
}

export class GetCommentsUseCase {
  constructor(private commentsRepository: CommentsRepository) {}

  async execute(): Promise<GetCommentsUseCaseResponse> {
    const comments = await this.commentsRepository.get();

    return {
      comments,
    };
  }
}
