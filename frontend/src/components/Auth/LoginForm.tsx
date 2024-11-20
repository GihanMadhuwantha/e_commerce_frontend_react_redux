import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Box, TextField, Button, Typography, Link } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { handleLogin } = useAuth();
  const navigate = useNavigate();

  const LoginSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Minimum 6 characters").required("Password is required"),
  });

  const handleSubmit = (values: { email: string; password: string }) => {
    handleLogin(values.email, values.password);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, handleChange, handleBlur }) => (
        <Form>
          <Box
            display="flex"
            flexDirection="column"
            gap={3}
            maxWidth={400}
            margin="auto"
            padding={4}
            bgcolor="background.paper"
            borderRadius={2}
            boxShadow={3}
          >
            <Typography variant="h4" textAlign="center" color="text.primary">
              Login
            </Typography>
            <TextField
              name="email"
              label="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
              fullWidth
              sx={{
                "& .MuiInputBase-root": {
                  color: "#ffffff",
                  backgroundColor: "#1f1f1f",
                },
                "& .MuiInputLabel-root": {
                  color: "#b0b0b0",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#333333",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#ffffff",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "primary.main",
                },
              }}
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
              fullWidth
              sx={{
                "& .MuiInputBase-root": {
                  color: "#ffffff",
                  backgroundColor: "#1f1f1f",
                },
                "& .MuiInputLabel-root": {
                  color: "#b0b0b0",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#333333",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#ffffff",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "primary.main",
                },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              sx={{
                fontWeight: 600,
                borderRadius: "8px",
                ":hover": { backgroundColor: "secondary.main", color: "primary.main" },
              }}
            >
              Login
            </Button>
            <Typography variant="body2" textAlign="center" color="text.secondary">
              Don't have an account?{" "}
              <Link
                onClick={() => navigate("/register")}
                underline="hover"
                sx={{
                  cursor: "pointer",
                  color: "primary.main",
                  ":hover": { textDecoration: "underline" },
                }}
              >
                Sign up here
              </Link>
            </Typography>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
