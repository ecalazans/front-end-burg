import { createContext, useState, type ReactNode } from "react";
import type { CartItemsContexType, CartItemType } from "../types/CartItem";

// eslint-disable-next-line react-refresh/only-export-components
export const CartItemsContext = createContext<CartItemsContexType>({
  cartItems: [],
  setCartItems: () => {},
});

export const CartItemsProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  return (
    <CartItemsContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartItemsContext.Provider>
  );
};
