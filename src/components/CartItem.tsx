import { ChevronLeft, Trash2 } from "lucide-react";
import { formatterPrice } from "../utils/formatterPrice";

type CartItemType = {
  id: string;
  title: string;
  price: number;
  img: string;
  quantity: number;
};

const CartItem = ({ id, title, price, img, quantity }: CartItemType) => {
  return (
    <div className="flex items-center gap-3">
      <img src={`./${img}`} alt="" className="w-25 rounded-md" />

      <div className="flex-1">
        <p className="font-bold uppercase">{title}</p>
        <p className="mt-1 mb-1 inline-block rounded-md bg-[#D77A61] px-1 font-bold text-white">
          {formatterPrice(price)}
        </p>
        <div className="mt-1 flex gap-3">
          <ChevronLeft
            className="cursor-pointer rounded-md bg-[#C92A0E] p-1 text-[#F2DAAC]"
            size={25}
          />
          <p className="font-bold">{quantity}</p>
          <ChevronLeft
            className="rotate-180 cursor-pointer rounded-md bg-[#C92A0E] p-1 text-[#F2DAAC]"
            size={25}
          />
        </div>
      </div>

      <Trash2 className="cursor-pointer" size={18} onClick={() => alert(id)} />
    </div>
  );
};

export default CartItem;
