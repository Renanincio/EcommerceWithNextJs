import { PrismaClient } from "@prisma/client";
import Chance from "chance";
import fetch from "node-fetch";

const prisma = new PrismaClient();
const chance = new Chance();

async function fetchImageAsBlob(imageUrl: string): Promise<Buffer> {
  const response = await fetch(imageUrl);
  const buffer = await response.buffer();
  return buffer;
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
        image: imageBlob.length,
      };
    }),
  );

  await prisma.product.createMany({ data: products });
  console.log("Products seeded!");

  const comments = await Promise.all(
    Array.from({ length: 300 }).map(() => ({
      id: chance.guid(),
      text: chance.sentence({ words: 10 }),
      image: chance.bool() ? chance.integer({ min: 1, max: 100 }) : null,
      userId: users[chance.integer({ min: 0, max: users.length - 1 })].id,
      productId:
        products[chance.integer({ min: 0, max: products.length - 1 })].id,
    })),
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
