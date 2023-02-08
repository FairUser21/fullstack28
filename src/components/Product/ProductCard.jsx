import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useProduct } from "../Contexts/ProductContextProvider";

const ProductCard = ({ item }) => {
  const { deleteProduct } = useProduct();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="caption" color="error">
          {item.author}
        </Typography>
        <div>
          <Typography variant="body" color="error">
            {item.likes}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">Like</Button>
        <Button size="small" onClick={() => deleteProduct(item.id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
