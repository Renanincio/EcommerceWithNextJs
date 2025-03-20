import { PrismaClient } from "@prisma/client";
import Chance from "chance";
import fetch from "node-fetch-cjs";

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

    const buffer = await Buffer.from(arrayBuffer);
    return buffer;
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
  const users = await Promise.all(
    Array.from({ length: 50 }).map(() => ({
      id: chance.guid(),
      name: chance.name(),
      email: chance.email(),
      password: chance.string({ length: 10 }),
    })),
  );

  await prisma.user.createMany({ data: users });
  console.log("Users seeded!");

  const products = await Promise.all(
    Array.from({ length: 100 }).map(async () => {
      const imageUrl = `https://picsum.photos/200/300?random=${chance.integer({ min: 1, max: 1000 })}`;
      const imageBlob = await fetchImageAsBlob(imageUrl);

      return {
        id: chance.guid(),
        price: chance.integer({ min: 10, max: 1000 }),
        description: chance.sentence(),
        name: chance.word({ length: 5 }),
        color: chance.color(),
        category: chance.word(),
        info: chance.sentence(),
        datasheet: chance.paragraph(),
        image: imageBlob,
      };
    }),
  );

  await prisma.product.createMany({ data: products });
  console.log("Products seeded!");

  const comments = await Promise.all(
    Array.from({ length: 300 }).map(async () => {
      const shouldHaveImage = chance.bool();
      let image: Buffer | null = null;

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
  console.log("Comments seeded!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
