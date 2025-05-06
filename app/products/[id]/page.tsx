interface Params {
    id: string;
}

const ProductDetailsPage = ( { params: { id } } : { params: Params } ) => {
  return (
    <>
      <h1>Essa é a pagina de detalhamento do produto</h1>
      <p>Product ID: {id}</p>
      {/* Aqui você pode adicionar mais detalhes sobre o produto com o ID fornecido, e tudo que for colocado na url vai aparecer no ID personalizado */}
      {/* Exemplo: detalhes do produto, imagens, descrição, etc. */}
      {/* Utilizando o [...id] vai mostrar o id mesmo que a url esteja incorreta*/}
    </>
  );
};

export default ProductDetailsPage;
