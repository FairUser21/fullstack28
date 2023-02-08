import React, { useEffect } from "react";
import { useProduct } from "../Contexts/ProductContextProvider";

const ProductList = () => {
  const { getProducts, products } = useProduct();

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  return <div></div>;
};

export default ProductList;
