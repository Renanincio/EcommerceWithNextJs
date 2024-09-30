import { FastifyInstance } from "fastify";
import { verifyJWT } from "../../middlewares/verify-jwt";
import { Comments } from "./comments";
import { RegisterComments } from "./registerComments";
import { UpdateComment } from "./updateProduct";
import { DeleteComment } from "./deleteComment";

export async function productsRoutes(app: FastifyInstance) {
  app.get("/comments", Comments);

  app.post("/createComment", { onRequest: [verifyJWT] }, RegisterComments);
  app.patch("/updateComment", { onRequest: [verifyJWT] }, UpdateComment);
  app.delete("/deleteComent", { onRequest: [verifyJWT] }, DeleteComment);
}
