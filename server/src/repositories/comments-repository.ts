import { Comments, Prisma } from "@prisma/client";

export interface CommentsRepository {
  create(data: Prisma.CommentsCreateInput): Promise<Comments>;
}
