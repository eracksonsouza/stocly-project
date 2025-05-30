/* eslint-disable no-unused-vars */
import { PrismaClient } from "@prisma/client"; // 40.2k (gzipped: 15.3k)

declare global {
  var cachedPrisma: ReturnType<typeof createPrismaClient>;
}

const createPrismaClient = () => {
  return new PrismaClient().$extends({
    result: {
      product: {
        status: {
          needs: { stock: true },
          compute(product) {
            if (product.stock < 1) {
              return "OUT_OF_STOCK";
            }
            return "IN_STOCK";
          },
        },
      },
    },
  });
};

let prisma: ReturnType<typeof createPrismaClient>;
if (process.env.NODE_ENV === "production") {
  prisma = createPrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = createPrismaClient();
  }
  prisma = global.cachedPrisma;
}

export const db = prisma;