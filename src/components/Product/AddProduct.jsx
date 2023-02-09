import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProduct } from "../Contexts/ProductContextProvider";

const AddProduct = () => {
  const { addProducts, getCategories, categories } = useProduct();

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    getCategories();
  }, []);
  console.log(categories);
  const handleChange = (e) => {
    if (e.target.name === "image") {
      setProduct({
        ...product,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setProduct({
        ...product,
        [e.target.name]: e.target.value,
      });
    }
  };

  function handleSave() {
    let formData = new FormData();
    formData.append("title", product.title);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("category", product.category);
    formData.append("image", product.image);
    addProducts(formData);
  }

  return (
    <Box sx={{ width: "40vw", m: "auto" }}>
      <Typography>ADD product page</Typography>
      <TextField
        sx={{ m: 1 }}
        id="standart-basic"
        label="Title"
        variant="outlined"
        fullWidth
        name="title"
        value={product.title}
        onChange={handleChange}
      />
      <TextField
        sx={{ m: 1 }}
        id="standart-basic"
        label="Description"
        variant="outlined"
        fullWidth
        name="description"
        value={product.description}
        onChange={handleChange}
      />
      <TextField
        sx={{ m: 1 }}
        id="standart-basic"
        label="Price"
        variant="outlined"
        fullWidth
        name="price"
        value={product.price}
        onChange={handleChange}
      />
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select
          name="category"
          label="category"
          value={product.category}
          onChange={handleChange}
        >
          {categories.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        type="file"
        name="image"
        // value={product.image}
        onChange={handleChange}
      />
      <Button
        sx={{ m: 1 }}
        variant="outlined"
        fullWidth
        size="large"
        onClick={handleSave}
      >
        ADD PRODUCT
      </Button>
    </Box>
  );
};

export default AddProduct;
