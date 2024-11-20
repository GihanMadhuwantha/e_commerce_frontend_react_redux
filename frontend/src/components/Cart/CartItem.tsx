import React from "react";
import { Box, Typography, IconButton, TextField, useTheme } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { CartItem as CartItemType } from "../../interfaces/Cart";
import { removeItem, updateQuantity } from "../../redux/slices/cartSlice";

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = parseInt(event.target.value, 10);
    if (quantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity }));
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding={2}
      borderBottom={`1px solid ${theme.palette.text.secondary}`}
      bgcolor={theme.palette.background.paper}
    >
      <Box display="flex" alignItems="center" gap={2}>
        <img
          src={item.image}
          alt={item.name}
          style={{
            width: 80,
            height: 80,
            objectFit: "cover",
            borderRadius: "8px",
            border: `1px solid ${theme.palette.text.secondary}`,
          }}
        />
        <Box>
          <Typography variant="h6" color={theme.palette.text.primary} fontWeight="bold">
            {item.name}
          </Typography>
          <Typography color={theme.palette.text.secondary}>
            ${item.price.toFixed(2)}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" gap={2}>
        <TextField
          type="number"
          variant="outlined"
          size="small"
          value={item.quantity}
          onChange={handleQuantityChange}
          inputProps={{ min: 1 }}
          sx={{
            width: 60,
            "& .MuiOutlinedInput-root": {
              backgroundColor: theme.palette.background.default,
              color: theme.palette.text.primary,
              "& fieldset": {
                borderColor: theme.palette.text.secondary,
              },
              "&:hover fieldset": {
                borderColor: theme.palette.text.primary,
              },
              "&.Mui-focused fieldset": {
                borderColor: theme.palette.primary.main,
              },
            },
          }}
        />
        <IconButton onClick={handleRemove} sx={{ color: theme.palette.error.main }}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CartItem;
