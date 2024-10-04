import { FastifyInstance } from "fastify";
import { RegisterProduct } from "./registerProducts";
import { UpdateProduct } from "./updateProduct";
import { verifyJWT } from "../../middlewares/verify-jwt";
import { Products } from "./products";
import { DeleteProduct } from "./deleteProduct";
import { Product } from "./product";

export async function productsRoutes(app: FastifyInstance) {
  app.post("/createProducts", { onRequest: [verifyJWT] }, RegisterProduct);
  app.patch("/updateProduct/:id", { onRequest: [verifyJWT] }, UpdateProduct);
  app.delete("/deleteProduct/:id", { onRequest: [verifyJWT] }, DeleteProduct);
  app.get("/products", Products);
  app.get("/product/:id", Product);
}
