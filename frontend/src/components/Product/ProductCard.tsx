import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  addItem,
  incrementQuantity,
  decrementQuantity,
} from "../../redux/slices/cartSlice";
import { Product } from "../../interfaces/Product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state: RootState) =>
    state.cart.items.find((item) => item.id === product.id)
  );

  const quantity = cartItem?.quantity || 0;

  const handleIncrement = () => {
    if (!cartItem) {
      dispatch(
        addItem({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          image: product.image,
        })
      );
    } else {
      dispatch(incrementQuantity(product.id));
    }
  };

  const handleDecrement = () => {
    if (cartItem && quantity > 0) {
      dispatch(decrementQuantity(product.id));
    }
  };

  return (
    <Card
      sx={{ maxWidth: 300, margin: "0 auto", boxShadow: 3, borderRadius: 2 }}
    >
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        sx={{
          height: 200,
          objectFit: "cover",
          objectPosition: "bottom",
        }}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h6" fontWeight="bold">
          {product.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ margin: "8px 0" }}
        >
          {product.description}
        </Typography>
        <Typography
          variant="h5"
          fontWeight="bold"
          color="primary"
          sx={{ marginBottom: 2 }}
        >
          ${product.price.toFixed(2)}
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center" gap={1}>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={handleDecrement}
            disabled={quantity === 0}
            sx={{ minWidth: "30px", padding: "5px" }}
          >
            -
          </Button>
          <Typography variant="body1">{quantity}</Typography>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={handleIncrement}
            sx={{ minWidth: "30px", padding: "5px" }}
          >
            +
          </Button>
        </Box>
      </CardContent>
      <Button
        variant="contained"
        size="medium"
        color="secondary"
        onClick={handleIncrement}
        sx={{ width: "100%", borderRadius: 0 }}
      >
        Add to Cart
      </Button>
    </Card>
  );
};

export default ProductCard;
