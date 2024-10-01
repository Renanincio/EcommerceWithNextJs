import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryProductsRepository } from "../../repositories/in-memory/in-memory-products-repository";
import { UpdateProductUseCase } from "./updateProduct";

let productsRepository: InMemoryProductsRepository;
let sut: UpdateProductUseCase;

describe("Update Product Use Case", () => {
  beforeEach(() => {
    productsRepository = new InMemoryProductsRepository();
    sut = new UpdateProductUseCase(productsRepository);
  });

  it("should be possible to update a product", async () => {
    const product = await productsRepository.create({
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

    expect(productsRepository.items).toContainEqual(product);

    await sut.execute({
      id: product.id,
      name: "Smartphone ABC",
      price: 499.99,
      info: "Um smartphone com recursos avançados.",
      datasheet: "https://example.com/datasheet.pdf",
      category: "Eletrônicos",
      description:
        "Smartphone com tela de 6.5 polegadas, 128GB de armazenamento e câmera de 48MP.",
      color: "Preto",
      image: 1,
    });

    const updatedComment = productsRepository.items.find(
      (item) => item.id === product.id,
    );

    expect(updatedComment?.name).toBe("Smartphone ABC");
  });
});
