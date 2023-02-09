import { Box, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProduct } from "../Contexts/ProductContextProvider";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { getProducts, products, pages } = useProduct();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
  }, [currentPage]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Box>
      <Box>
        <Pagination
          count={pages}
          page={currentPage}
          variant="outlined"
          color="primary"
          onChange={(e, p) => setCurrentPage(p)}
        />
      </Box>
    </Box>
  );
};

export default ProductList;
