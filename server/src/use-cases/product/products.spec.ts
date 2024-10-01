import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryProductsRepository } from "../../repositories/in-memory/in-memory-products-repository";
import { GetProductsUseCase } from "./products";

let productsRepository: InMemoryProductsRepository;
let sut: GetProductsUseCase;

describe("Get Product Use Case", () => {
  beforeEach(() => {
    productsRepository = new InMemoryProductsRepository();
    sut = new GetProductsUseCase(productsRepository);
  });

  it("should be possible to find products", async () => {
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

    const product2 = await productsRepository.create({
      id: "123e4567-e89b-12d3-a456-426614174000",
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

    const { products } = await sut.execute();

    expect(products).toHaveLength(2);
    expect(products).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: product1.id }),
        expect.objectContaining({ id: product2.id }),
      ]),
    );
  });
});
