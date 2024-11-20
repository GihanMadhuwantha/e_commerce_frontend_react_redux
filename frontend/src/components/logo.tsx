import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Box
      component={Link}
      to="/"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "50px",
        height: "50px",
        objectFit: "contain",
        backgroundColor: "transparent",
        padding: "8px",
        zIndex: 1100,
        borderRadius: "15px",
      }}
    >
      <Box
        component="img"
        alt="SoleSphere Logo"
        src="/assets/logo.png"
        sx={{
          width: "100%",
          height: "100%",
        }}
      />
    </Box>
  );
};

export default Logo;
