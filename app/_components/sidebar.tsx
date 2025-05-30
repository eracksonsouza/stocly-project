// o _components vai tornar a pasta privada para o next.js, ou seja, não será acessível diretamente pela URL. Isso é útil para organizar componentes que são usados apenas internamente na aplicação, como o sidebar e o layout.


import { LayoutGridIcon, PackageIcon, ShoppingBasketIcon } from "lucide-react";
import SidebarButton from "./sidebar-button";

const SideBar = () => {
  return (
    <div className="w-64 bg-white">
      {/* Imagem*/}
      <div className="px-8 py-6">
        <h1 className="text-2xl font-bold">STOCKLY</h1>
      </div>

      {/* Botões */}
      <div className="flex flex-col gap-2 p-2">
        <SidebarButton href="/">
          <LayoutGridIcon size={20} />
          Dashboard
        </SidebarButton>

        <SidebarButton href="/products">
          <PackageIcon size={20} />
          Produtos
        </SidebarButton>

        <SidebarButton href="/sales">
          <ShoppingBasketIcon size={20} />
          Vendas
        </SidebarButton>
      </div>
    </div>
  );
};

export default SideBar;
