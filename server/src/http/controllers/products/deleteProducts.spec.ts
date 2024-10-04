import request from "supertest";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { app } from "../../../app";
import { createAndAuthenticateUser } from "../../../utils/create-and-authenticate-user";
import { resetDatabase } from "../../../utils/resetDatabase";

describe("Delete Product (e2e)", () => {
  beforeAll(async () => {
    await resetDatabase();
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to delete a product", async () => {
    const { token } = await createAndAuthenticateUser(app);
    const response = await request(app.server)
      .post("/createProducts")
      .set("Authorization", `Bearer ${token}`)
      .send({
        price: 199.99,
        description: "A high-quality product",
        name: "Smartphone X",
        color: "Black",
        category: "Electronics",
        info: "Latest model",
        datasheet: "Specs and features",
        image: 12345,
      });

    expect(response.statusCode).toEqual(201);

    const { id } = response.body.product;

    const deletedProduct = await request(app.server)
      .delete(`/deleteProduct/${id}`)
      .set("Authorization", `Bearer ${token}`);

    expect(deletedProduct.statusCode).toEqual(204);
  });
});
