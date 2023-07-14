
import { useState, useEffect, useContext, createContext } from "react";

const Product = createContext();

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState({ product: null});
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setProduct({
        ...product,
        product: parseData.user,
      });
    }
  }, []);
  return (
    <Product.Provider value={[product, setProduct]}>
      {children}
    </Product.Provider>
  );
};

// custom hook
const useProduct = () => useContext(Product);

export { useProduct, ProductProvider };
