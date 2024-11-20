import { Box, Typography, Button, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const CartSummary = () => {
  const theme = useTheme();
  const items = useSelector((state: RootState) => state.cart.items);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Box
      padding={3}
      border={`1px solid ${theme.palette.text.secondary}`}
      borderRadius={2}
      bgcolor={theme.palette.background.paper}
      display="flex"
      flexDirection="column"
      gap={2}
    >
      <Typography
        variant="h6"
        textAlign="center"
        color={theme.palette.text.primary}
        fontWeight="bold"
      >
        Cart Summary
      </Typography>
      <Typography
        variant="body1"
        color={theme.palette.text.secondary}
      >
        Total Items: {items.reduce((sum, item) => sum + item.quantity, 0)}
      </Typography>
      <Typography
        variant="h6"
        color={theme.palette.text.primary}
        fontWeight="bold"
      >
        Total Price: ${totalPrice.toFixed(2)}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.primary.main,
          ":hover": {
            backgroundColor: theme.palette.primary.light,
          },
        }}
      >
        Checkout
      </Button>
    </Box>
  );
};

export default CartSummary;
