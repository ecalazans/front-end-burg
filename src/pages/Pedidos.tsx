import { useEffect, useState } from "react";
import CardPedido from "../components/CardPedido";

const Pedidos = () => {
  const [category, setCategory] = useState("Pendente");
  const [products, setProducts] = useState([]);

  const handleCategory = (newCategory: string) => {
    setCategory(newCategory);
  };

  const getCategoryClass = (categoryName: string) => {
    const elementSelected =
      "flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border border-[#F2DAAC] bg-[#F2DAAC] text-sm font-bold text-[#161410] md:h-9 md:w-32 md:text-sm";
    const elementNotSelected =
      "flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border border-[#F2DAAC] bg-[#161410] text-sm font-bold text-[#F2DAAC] hover:bg-[#F2DAAC] hover:text-[#161410] md:h-9 md:w-32 md:text-sm";

    if (category === categoryName) {
      return elementSelected;
    } else {
      return elementNotSelected;
    }
  };

  return (
    <div className="mx-auto w-full md:w-184.25">
      {/* Categorias */}
      <div className="my-1 flex gap-2 p-3 md:my-3 md:p-0">
        <div
          className={getCategoryClass("Pendente")}
          onClick={() => handleCategory("Pendente")}
        >
          Pendente
        </div>
        <div
          className={getCategoryClass("Retirado")}
          onClick={() => handleCategory("Retirado")}
        >
          Retirado
        </div>
        <div
          className={getCategoryClass("Cancelado")}
          onClick={() => handleCategory("Cancelado")}
        >
          Cancelado
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 p-3 md:p-0">
        <CardPedido
          id={1}
          name="Erick D.C"
          date="12/03/2027"
          orderTime="13:00"
          totalOrder={234.66}
        />
      </div>
    </div>
  );
};

export default Pedidos;
