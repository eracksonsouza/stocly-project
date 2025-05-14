//o data-acess é o local onde fica a comunicação com o banco de dados para pegar os dados e não passe dados diretamente para o componente
//se tem algum dado que não pode ser acessado diretamente, tem que ser feito aqui
// e não passa direto para o componente
//exemplo: se tem um usuario que possui email, id e senha, mas não pode ser acessado
//no return eu vou passar só o id e email

import "server-only";
import { db } from "@/app/_lib/prisma";
import { Product } from "@prisma/client";

export const getProducts = async (): Promise<Product[]> => {
  return db.product.findMany({});
};
