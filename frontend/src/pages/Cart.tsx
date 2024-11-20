import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CartItem from "../components/Cart/CartItem";
import CartSummary from "../components/Cart/CartSummery";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Cart = () => {
  const items = useSelector((state: RootState) => state.cart.items);

  return (
    <Container
      maxWidth="lg"
      sx={{
        paddingTop: { xs: "80px", md: "60px" },
      }}
    >
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 8 }}>
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <CartSummary />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
