import { FastifyInstance } from "fastify";
import { RegisterProduct } from "./registerProducts";
import { UpdateProduct } from "./updateProduct";
import { verifyJWT } from "../../middlewares/verify-jwt";
import { Products } from "./products";

export async function productsRoutes(app: FastifyInstance) {
  app.post("/createProducts", { onRequest: [verifyJWT] }, RegisterProduct);
  app.patch("/updateProducts", { onRequest: [verifyJWT] }, UpdateProduct);
  app.get("/products", Products);
}
