import { ChevronLeft, Trash2 } from "lucide-react";

const CartItem = () => {
  return (
    <div className="flex items-center gap-3">
      <img src="./duplo-da-casa.png" alt="" className="w-25 rounded-md" />

      <div className="flex-1">
        <p className="font-bold uppercase">Duplo da casa</p>
        <p className="mt-1 mb-1 inline-block rounded-md bg-[#D77A61] px-1 font-bold text-white">
          R$ 28,90
        </p>
        <div className="mt-1 flex gap-3">
          <ChevronLeft
            className="cursor-pointer rounded-md bg-[#C92A0E] p-1 text-[#F2DAAC]"
            size={25}
          />
          <p className="font-bold">1</p>
          <ChevronLeft
            className="rotate-180 cursor-pointer rounded-md bg-[#C92A0E] p-1 text-[#F2DAAC]"
            size={25}
          />
        </div>
      </div>

      <Trash2 className="cursor-pointer" size={18} />
    </div>
  );
};

export default CartItem;
