import { Container } from "@mui/material";
import ProductList from "../components/Product/ProductList";

const Products = () => (
  <Container
    maxWidth="lg"
    sx={{
      paddingTop: { xs: "80px", md: "60px" }, 
    }}
  >
    <ProductList />
  </Container>
);

export default Products;

