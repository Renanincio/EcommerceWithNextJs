import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryProductsRepository } from "../../repositories/in-memory/in-memory-products-repository";
import { ProductUseCase } from "./product-use-case";

let productsRepository: InMemoryProductsRepository;
let sut: ProductUseCase;

describe("Find a Product Use Case", () => {
  beforeEach(() => {
    productsRepository = new InMemoryProductsRepository();
    sut = new ProductUseCase(productsRepository);
  });

  it("should be possible to find a product", async () => {
    const product1 = await productsRepository.create({
      id: "123e4567-e89b-12d3-a456-426614174001",
      name: "Smartphone XYZ",
      price: 499.99,
      info: "Um smartphone com recursos avançados.",
      datasheet: "https://example.com/datasheet.pdf",
      category: "Eletrônicos",
      description:
        "Smartphone com tela de 6.5 polegadas, 128GB de armazenamento e câmera de 48MP.",
      color: "Preto",
      image: 1,
    });

    const product = await sut.execute({ id: product1.id });

    expect(product.product).toEqual(
      expect.objectContaining({
        id: product1.id,
        name: product1.name,
        price: product1.price,
        category: product1.category,
      }),
    );
  });
});
