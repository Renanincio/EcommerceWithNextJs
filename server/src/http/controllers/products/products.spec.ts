import request from "supertest";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { resetDatabase } from "../../../utils/resetDatabase";
import { app } from "../../../app";
import { createAndAuthenticateUser } from "../../../utils/create-and-authenticate-user";

describe("Get Products (e2e)", () => {
  beforeAll(async () => {
    resetDatabase();
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to get products", async () => {
    const { token } = await createAndAuthenticateUser(app);
    await request(app.server)
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

    await request(app.server)
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

    const response = await request(app.server).get("/products").send();

    expect(response.statusCode).toEqual(200);
  });
});
