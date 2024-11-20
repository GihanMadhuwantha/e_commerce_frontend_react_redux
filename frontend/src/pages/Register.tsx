import { Box } from "@mui/material";
import RegisterForm from "../components/Auth/RegisterForm";

const Register = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="80vh"
  >
    <RegisterForm />
  </Box>
);

export default Register;
