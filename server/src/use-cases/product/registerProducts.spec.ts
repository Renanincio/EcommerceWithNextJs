import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryProductsRepository } from "../../repositories/in-memory/in-memory-products-repository";
import { RegisterProductUseCase } from "./registerProduct";

let productsRepository: InMemoryProductsRepository;
let sut: RegisterProductUseCase;

describe("Register Product Use Case", () => {
  beforeEach(() => {
    productsRepository = new InMemoryProductsRepository();
    sut = new RegisterProductUseCase(productsRepository);
  });
  it("should be possible to create a product", async () => {
    const { product } = await sut.execute({
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

    const storedProduct = productsRepository.items.find(
      (item) => item.id === product.id,
    );
    expect(storedProduct?.id).toBe(product.id);
  });
});
