import { FastifyInstance } from "fastify";
import { Register } from "./register";
import { Refresh } from "./refresh";
import { Authenticate } from "./authenticate";
import { verifyJWT } from "../../middlewares/verify-jwt";
import { Profile } from "./profile";

export async function userRoutes(app: FastifyInstance) {
  app.post("/users", Register);
  app.post("/sessions", Authenticate);

  app.patch("/token/refresh", Refresh);

  app.get("/me", { onRequest: [verifyJWT] }, Profile);
}
