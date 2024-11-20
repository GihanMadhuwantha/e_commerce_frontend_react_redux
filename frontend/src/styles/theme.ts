import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#ffffff" },
    secondary: { main: "#000000" },
    error: { main: "#ff5252" },
    background: { default: "#121212", paper: "#1f1f1f" },
    text: { primary: "#ffffff", secondary: "#b0b0b0" },
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    h1: { fontSize: "2.25rem", fontWeight: 700, color: "#ffffff" },
    h2: { fontSize: "2rem", fontWeight: 600, color: "#ffffff" },
    h3: { fontSize: "1.75rem", fontWeight: 500, color: "#ffffff" },
    h4: { fontSize: "1.5rem", fontWeight: 500, color: "#ffffff" },
    h5: { fontSize: "1.25rem", fontWeight: 400, color: "#ffffff" },
    h6: { fontSize: "1rem", fontWeight: 400, color: "#ffffff" },
    body1: { fontSize: "1rem", fontWeight: 400, color: "#b0b0b0" },
    body2: { fontSize: "0.875rem", fontWeight: 400, color: "#b0b0b0" },
    button: { textTransform: "uppercase", fontWeight: 500 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          color: "#ffffff",
          borderColor: "#ffffff",
          ":hover": {
            backgroundColor: "#333333",
          },
        },
        contained: {
          backgroundColor: "#ffffff",
          color: "#000000",
          ":hover": {
            backgroundColor: "#e0e0e0",
          },
        },
        outlined: {
          borderColor: "#ffffff",
          ":hover": {
            borderColor: "#e0e0e0",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& input:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0px 1000px #1f1f1f inset",
            WebkitTextFillColor: "#ffffff",
            transition: "background-color 5000s ease-in-out 0s",
          },
        },
        input: {
          color: "#ffffff",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
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
            borderColor: "#ffffff",
          },
          "& input:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0px 1000px #1f1f1f inset",
            WebkitTextFillColor: "#ffffff",
            transition: "background-color 5000s ease-in-out 0s",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#1f1f1f",
          color: "#ffffff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { backgroundColor: "#000000", color: "#ffffff" },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: { color: "#ffffff" },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          "& .MuiSnackbarContent-root": {
            backgroundColor: "#1f1f1f",
            color: "#ffffff",
            borderRadius: "16px",
            border: `1px solid #333333`,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
          },
        },
        anchorOriginBottomCenter: { bottom: "24px" },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          backgroundColor: "#1f1f1f",
          color: "#ffffff",
          fontSize: "0.875rem",
          fontWeight: 500,
          borderRadius: "16px",
          border: `1px solid #333333`,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        },
        standardSuccess: { backgroundColor: "#1f1f1f", color: "#4caf50" },
        standardError: { backgroundColor: "#1f1f1f", color: "#f44336" },
        standardWarning: { backgroundColor: "#1f1f1f", color: "#ff9800" },
        standardInfo: { backgroundColor: "#1f1f1f", color: "#2196f3" },
      },
    },
  },
});

export default theme;
