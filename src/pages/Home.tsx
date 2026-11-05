import { useEffect, useState } from "react";
import Product from "../components/Product";
import { type ProductType } from "../types/Product";

const Home = () => {
  const [category, setCategory] = useState("Hamburguer");
  const [products, setProducts] = useState<ProductType[]>([]);

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

  const filteredProduct = products.filter((product) => {
    return product.category === category;
  });

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/get-products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
        return;
      }
    };

    getProducts();
  }, []);

  return (
    <div className="mx-auto w-full md:w-184.25">
      <div className="my-1 flex gap-2 p-3 md:my-3 md:p-0">
        <div
          className={getCategoryClass("Hamburguer")}
          onClick={() => handleCategory("Hamburguer")}
        >
          Hamburguer
        </div>
        <div
          className={getCategoryClass("Bebida")}
          onClick={() => handleCategory("Bebida")}
        >
          Bebida
        </div>
        <div
          className={getCategoryClass("Porção")}
          onClick={() => handleCategory("Porção")}
        >
          Porção
        </div>
      </div>

      <p className="mb-2 pl-3 font-bold text-[#F2DAAC] uppercase md:pl-0">
        {category}
      </p>
      <div className="flex flex-col gap-1 md:gap-3">
        {filteredProduct.map((product) => (
          <Product
            id={product.id}
            description={product.description}
            img={product.img}
            name={product.name}
            price={product.price}
            category={product.category}
            key={product.id}
            setProducts={setProducts}
          />
        ))}
        {filteredProduct.length === 0 && (
          <p className="p-3 text-white md:p-0">
            Não há produtos desta categoria
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
