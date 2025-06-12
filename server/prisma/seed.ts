import { PrismaClient } from "@prisma/client";
import Chance from "chance";
import fetch from "node-fetch-cjs";
import { products } from "./products";

const prisma = new PrismaClient();
const chance = new Chance();

async function fetchImageAsBlob(imageUrl: string): Promise<Buffer> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch(imageUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    return Buffer.from(arrayBuffer);
  } catch (error: any) {
    if (error.name === "AbortError") {
      console.error("Fetch request timed out");
    } else {
      console.error(`Fetch error: ${error.message}`);
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

async function main() {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    console.error(`Erro ao buscar produtos: ${response.statusText}`);
    return;
  }

  const users = await Promise.all(
    Array.from({ length: 50 }).map(() => ({
      id: chance.guid(),
      name: chance.name(),
      email: chance.email(),
      password: chance.string({ length: 10 }),
    })),
  );

  await prisma.user.createMany({ data: users });

  const defaultImageBuffer = await fetchImageAsBlob(
    "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_1280.jpg",
  );

  const productData = await Promise.all(
    products.map(async (product) => {
      let image: Buffer;

      try {
        image = await fetchImageAsBlob(product.imageUrl);
      } catch {
        console.warn(
          `Erro ao buscar imagem de ${product.name}. Usando imagem padrão.`,
        );
        image = defaultImageBuffer;
      }

      return {
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        image,
        color: product.color,
        info: product.info,
        datasheet: product.datasheet,
      };
    }),
  );

  await prisma.product.createMany({
    data: productData,
    skipDuplicates: true,
  });

  const comments = await Promise.all(
    Array.from({ length: 300 }).map(async () => {
      const shouldHaveImage = chance.bool();
      let image: Buffer | null = null;
      const products = await prisma.product.findMany();

      if (shouldHaveImage) {
        const imageUrl = `https://picsum.photos/200/300?random=${chance.integer({ min: 1, max: 1000 })}`;
        const imageBlob = await fetchImageAsBlob(imageUrl);
        image = imageBlob;
      }

      return {
        id: chance.guid(),
        text: chance.sentence({ words: 10 }),
        image,
        userId: users[chance.integer({ min: 0, max: users.length - 1 })].id,
        productId:
          products[chance.integer({ min: 0, max: products.length - 1 })].id,
      };
    }),
  );

  await prisma.comments.createMany({ data: comments });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
