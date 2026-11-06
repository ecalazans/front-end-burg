import { X } from "lucide-react";
import Button from "./Button";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import type { CartItemType } from "../types/CartItem";

type CartTypeProps = {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  showCart: boolean;
};

const Cart = ({ setShowCart, showCart }: CartTypeProps) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  const getCartItems = async () => {
    try {
      const response = await fetch("http://localhost:3000/get-cart-items", {
        credentials: "include",
      });

      if (!response.ok) {
        console.log("Erro ao realizar a requisição");
        return;
      }

      const data = await response.json();
      setCartItems(data);
      return;
    } catch (error) {
      console.log(error);
      return;
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getCartItems();
  }, []);
  return (
    <div className="absolute right-0 z-1 flex h-screen w-93.75 flex-col bg-[#F2DAAC] p-5">
      <div className="flex items-center justify-between">
        <X className="cursor-pointer" onClick={() => setShowCart(!showCart)} />
        <p className="font-bold uppercase">Meu carrinho</p>
      </div>

      <div className="mt-10 flex flex-1 flex-col gap-3">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            title={item.product.name}
            price={item.product.price}
            img={item.product.img}
            id={item.product.id}
          />
        ))}
      </div>

      <Button title="Finalizar pedido" />
    </div>
  );
};

export default Cart;
