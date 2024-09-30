import { FastifyInstance } from "fastify";
import { RegisterProduct } from "./registerProducts";
import { UpdateProduct } from "./updateProduct";
import { verifyJWT } from "../../middlewares/verify-jwt";

export async function productsRoutes(app: FastifyInstance) {
  app.post("/products", { onRequest: [verifyJWT] }, RegisterProduct);
  app.patch("/update", { onRequest: [verifyJWT] }, UpdateProduct);
}
