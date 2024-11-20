import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Box,
  Typography,
  IconButton,
  InputAdornment,
  OutlinedInput,
  FormControl,
  InputLabel,
  FormHelperText,
  Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useAuth } from "../../hooks/useAuth";

const RegisterForm = () => {
  const { handleSignUp } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword((prev) => !prev);

  const RegisterSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Minimum 6 characters").required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Confirm password is required"),
  });

  const handleSubmit = (values: { name: string; email: string; password: string }) => {
    handleSignUp(values.name, values.email, values.password);
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
      validationSchema={RegisterSchema}
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
              Register
            </Typography>
            <FormControl
              variant="outlined"
              error={Boolean(touched.name && errors.name)}
              fullWidth
            >
              <InputLabel>Name</InputLabel>
              <OutlinedInput
                name="name"
                label="Name"
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{
                  color: "text.primary",
                  bgcolor: "background.default",
                  "& input": {
                    color: "text.primary",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "text.secondary",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "text.primary",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary.main",
                  },
                }}
              />
              <FormHelperText>{touched.name && errors.name}</FormHelperText>
            </FormControl>

            <FormControl
              variant="outlined"
              error={Boolean(touched.email && errors.email)}
              fullWidth
            >
              <InputLabel>Email</InputLabel>
              <OutlinedInput
                name="email"
                label="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{
                  color: "text.primary",
                  bgcolor: "background.default",
                  "& input": {
                    color: "text.primary",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "text.secondary",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "text.primary",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary.main",
                  },
                }}
              />
              <FormHelperText>{touched.email && errors.email}</FormHelperText>
            </FormControl>

            <FormControl
              variant="outlined"
              error={Boolean(touched.password && errors.password)}
              fullWidth
            >
              <InputLabel>Password</InputLabel>
              <OutlinedInput
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                onChange={handleChange}
                onBlur={handleBlur}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={togglePasswordVisibility}
                      edge="end"
                      sx={{
                        color: "text.primary",
                        ":hover": {
                          color: "primary.main",
                        },
                      }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                sx={{
                  color: "text.primary",
                  bgcolor: "background.default",
                  "& input": {
                    color: "text.primary",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "text.secondary",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "text.primary",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary.main",
                  },
                }}
              />
              <FormHelperText>{touched.password && errors.password}</FormHelperText>
            </FormControl>

            <FormControl
              variant="outlined"
              error={Boolean(touched.confirmPassword && errors.confirmPassword)}
              fullWidth
            >
              <InputLabel>Re-enter Password</InputLabel>
              <OutlinedInput
                name="confirmPassword"
                label="Re-enter Password"
                type={showConfirmPassword ? "text" : "password"}
                onChange={handleChange}
                onBlur={handleBlur}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={toggleConfirmPasswordVisibility}
                      edge="end"
                      sx={{
                        color: "text.primary",
                        ":hover": {
                          color: "primary.main",
                        },
                      }}
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                sx={{
                  color: "text.primary",
                  bgcolor: "background.default",
                  "& input": {
                    color: "text.primary",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "text.secondary",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "text.primary",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary.main",
                  },
                }}
              />
              <FormHelperText>{touched.confirmPassword && errors.confirmPassword}</FormHelperText>
            </FormControl>

            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              sx={{
                fontWeight: 600,
                borderRadius: "8px",
                ":hover": {
                  backgroundColor: "secondary.main",
                  color: "primary.main",
                },
              }}
            >
              Register
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
