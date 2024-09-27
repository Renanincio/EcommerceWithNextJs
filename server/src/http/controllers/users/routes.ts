import { FastifyInstance } from "fastify";
import { Register } from "./register";
import { RegisterProduct } from "../products/registerProducts";

export async function userRoutes(app: FastifyInstance) {
  app.post("/users", Register);
  app.post("/products", RegisterProduct);
}
