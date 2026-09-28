import { ShoppingCart } from "lucide-react";
import { type ProductType } from "../types/Product";
import { formatterPrice } from "../utils/formatterPrice";

const Product = ({
  id,
  description,
  img,
  name,
  price,
  category,
}: ProductType) => {
  return (
    <div className="px-3 text-white md:p-0">
      <div className="flex gap-2">
        <img
          className="h-20.75 w-25 object-cover md:h-41.5 md:w-50"
          src={`./${img}`}
          alt=""
        />
        <div className="flex flex-col">
          <p className="text-sm font-bold uppercase md:text-lg">{name}</p>
          <p className="flex-1 text-xs text-[#848484] md:text-base">
            {description}
          </p>
          <div className="flex items-center justify-end gap-2">
            <p className="text-sm text-[#F2DAAC]">{formatterPrice(price)}</p>
            <ShoppingCart size={18} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
