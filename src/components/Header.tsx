import { Link, useLocation } from "react-router";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { LogOut, ShoppingCart, Box, LayoutDashboard, Plus } from "lucide-react";
import Cart from "./Cart";

const Header = () => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const { user, setUser } = useContext(UserContext);
  const location = useLocation();

  const handleAuthUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/me", {
        credentials: "include",
      });

      if (response.status !== 200) {
        console.log("Não autenticou na rota: ME");
        return;
      }

      const data = await response.json();
      setUser(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/logout", {
        credentials: "include",
        method: "POST",
      });

      if (!response.ok) {
        console.log("Deu ruim");
        return;
      }

      setUser(null);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  useEffect(() => {
    handleAuthUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getNavItemClass = (path: string) => {
    const baseClass =
      "flex h-8.75 w-8.75 cursor-pointer items-center justify-center rounded-md border";

    if (location.pathname === path) {
      return `${baseClass} text-[#161410] bg-[#F2DAAC] border-transparent`;
    } else {
      return baseClass;
    }
  };

  return (
    <div className="bg-[hsl(40,16%,7%)]">
      {showCart && <Cart setShowCart={setShowCart} showCart={showCart} />}
      <div className="mx-auto flex w-full items-center justify-between p-3 md:w-184.25 md:p-0">
        <Link to={"/"}>
          <img src="./logo.png" alt="" />
        </Link>

        {user ? (
          <div className="flex items-center gap-8 text-white">
            {user.admin && (
              <div className="hidden gap-2 text-[#F2DAAC] md:flex">
                <Link to={"/"}>
                  <div className={getNavItemClass("/")}>
                    <Box size={18} />
                  </div>
                </Link>

                <Link to={"/pedidos"}>
                  <div className={getNavItemClass("/pedidos")}>
                    <LayoutDashboard size={18} />
                  </div>
                </Link>

                <div className="flex h-8.75 w-8.75 cursor-pointer items-center justify-center rounded-md border">
                  <Plus />
                </div>
              </div>
            )}

            <div className="relative">
              <ShoppingCart
                size={18}
                className="cursor-pointer"
                onClick={() => setShowCart(!showCart)}
              />
              <p className="absolute -top-4 -right-4 flex h-5 w-5 items-center justify-center rounded-xl bg-[#F2DAAC] text-[#161410]">
                1
              </p>
            </div>

            <div className="flex items-center gap-2">
              <p>{user.name}</p>
              <LogOut
                size={18}
                className="cursor-pointer"
                onClick={() => handleLogout()}
              />
            </div>
          </div>
        ) : (
          <Link to="/login">
            <div className="flex h-8.75 w-32.5 cursor-pointer items-center justify-center rounded-sm bg-[#F2DAAC]">
              Entrar
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
