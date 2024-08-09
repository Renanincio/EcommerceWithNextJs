import { FastifyInstance } from "fastify";
import { Register } from "./register";

export async function userRoutes(app: FastifyInstance) {
  app.post("/users", Register);
}
