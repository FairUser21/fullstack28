import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";
import { useProduct } from "../Contexts/ProductContextProvider";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  const { deleteProduct, toggleLike } = useProduct();

  return (
    <Card sx={{ width: 345, margin: "3%" }}>
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
        <div></div>
      </CardContent>
      <CardActions>
        <Typography variant="body" color="error">
          {item.likes}
        </Typography>
        <IconButton onClick={() => toggleLike(item.id)}>
          <FavoriteIcon color={item.liked_by_user ? "error" : ""} />
        </IconButton>

        <Button size="small" onClick={() => deleteProduct(item.id)}>
          Delete
        </Button>
        <Link to={`/edit/${item.id}`}>
          <Button size="small">Edit</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
