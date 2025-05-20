
//esse arquivo é o responsável por criar as rotas http para os produtos
// e esta apenas como referencia
// aqui vai ser o endpoint que vai ser chamado para pegar os produtos e criar rotas http 



import { db } from "@/app/_lib/prisma";

export async function GET() {
  const products = await db.product.findMany({});

  return Response.json(products, {
    status: 200,
  });
}

export async function POST (request: Request) {
    const body = await request.json();

    const name = body.name;
    const price = body.price;
    const stock = body.stock;

    await db.product.create({
        data: {
            name,
            price,
            stock,
            status: "active", // or another appropriate default value
        },
    })
    return Response.json(
        {
            message: "Produto criado com sucesso",
        },
        {
            status: 201,
        }
    )
}