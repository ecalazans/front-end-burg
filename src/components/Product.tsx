import { ShoppingCart } from "lucide-react";
import { type ProductProps } from "../types/Product";
import { formatterPrice } from "../utils/formatterPrice";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { CartItemsContext } from "../context/CartItemsContext";

const Product = ({
  id,
  description,
  img,
  name,
  price,
  category,
  setProducts,
}: ProductProps) => {
  const { user } = useContext(UserContext);
  const { cartItems, setCartItems } = useContext(CartItemsContext);

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/get-products");

      const data = await response.json();
      console.log("setProducts:", setProducts);
      console.log("typeof setProducts:", typeof setProducts);
      setProducts(data);
    } catch (error) {
      console.log(error);
      return;
    }
  };

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

  const newCartItem = async () => {
    try {
      const response = await fetch("http://localhost:3000/create-cart-item", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ productId: id }),
      });

      if (!response.ok) {
        console.log("deu ruim");
        return;
      }
      getCartItems();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteProduct = async (id: string) => {
    try {
      if (!id) {
        console.log("ID não enviado");
        return;
      }
      const response = await fetch(
        `http://localhost:3000/delete-product/${id}`,
        {
          method: "DELETE",
          credentials: "include",
        },
      );

      if (!response.ok) {
        console.log("Erro ao realizar a requisião");
        return;
      }

      getProducts();
    } catch (error) {
      console.error(error);
      return;
    }
  };

  return (
    <div className="px-3 text-white md:p-0">
      <div className="flex gap-2">
        <img
          className="h-20.75 w-25 object-cover md:h-41.5 md:w-50"
          src={`./${img}`}
          alt=""
        />
        <div className="flex w-full flex-col">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold uppercase md:text-lg">{name}</p>
            {user?.admin && (
              <div
                className="flex cursor-pointer items-center rounded-md border px-1 text-xs text-red-500 uppercase"
                onClick={() => handleDeleteProduct(id)}
              >
                Deletar
              </div>
            )}
          </div>
          <p className="flex-1 text-xs text-[#848484] md:text-base">
            {description}
          </p>
          <div className="flex items-center justify-end gap-2">
            <p className="text-sm text-[#F2DAAC]">{formatterPrice(price)}</p>
            <ShoppingCart
              size={18}
              className="cursor-pointer"
              onClick={() => newCartItem()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
