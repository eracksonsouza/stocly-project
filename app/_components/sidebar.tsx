// o _components vai tornar a pasta privada para o next.js, ou seja, não será acessível diretamente pela URL. Isso é útil para organizar componentes que são usados apenas internamente na aplicação, como o sidebar e o layout.

const SideBar = () => {
  return (
    <div className="w-64 bg-white">
      {/* Imagem*/}
      <div className="px-8 py-6">
        <h1 className="text-2xl font-bold">STOCKLY</h1>
      </div>

      {/* Botões */}
      <div className="flex flex-col gap-2 p-2">
        <button className="px-6 py-3">Dashboard</button>
        <button className="px-6 py-3">Produtos</button>
        <button className="px-6 py-3">Vendas</button>
      </div>
    </div>
  );
};

export default SideBar;
