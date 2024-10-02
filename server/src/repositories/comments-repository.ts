import { Comments } from "@prisma/client";

export interface CommentsRepository {
  create(data: Comments): Promise<Comments>;
  update(data: Comments): Promise<Comments>;
  delete(id: string): Promise<Comments>;
  get(): Promise<Comments[]>;
  findById(id: string): Promise<Comments | null>;
}
