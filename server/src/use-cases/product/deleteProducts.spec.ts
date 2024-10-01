import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryProductsRepository } from "../../repositories/in-memory/in-memory-products-repository";
import { DeleteProductUseCase } from "./deleteProduct";

let productsRepository: InMemoryProductsRepository;
let sut: DeleteProductUseCase;

describe("Delete Product Use Case", () => {
  beforeEach(() => {
    productsRepository = new InMemoryProductsRepository();
    sut = new DeleteProductUseCase(productsRepository);
  });
  it("should be possible to delete a products", async () => {
    const product = await productsRepository.create({
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

    const storedProduct = productsRepository.items.find(
      (item) => item.id === product.id,
    );

    expect(storedProduct?.id).toBe(product.id);

    await sut.execute({
      id: product.id,
    });

    const deletedProduct = productsRepository.items.find(
      (item) => item.id === product.id,
    );
    expect(deletedProduct).toBeUndefined();
  });
});
