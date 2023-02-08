import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useProduct } from "../Contexts/ProductContextProvider";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { getProducts, products } = useProduct();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Box>
      {products.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </Box>
  );
};

export default ProductList;
