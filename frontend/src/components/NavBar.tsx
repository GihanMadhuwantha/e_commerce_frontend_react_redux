import { AppBar, Toolbar, Button, Box, IconButton, Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { ShoppingCart, Logout } from "@mui/icons-material";
import { useAuth } from "../hooks/useAuth";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const NavBar = () => {
  const { isAuthenticated, user, handleLogout } = useAuth();
  const cartItemsCount = useSelector((state: RootState) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        right: 0,
        width: { xs: "100%", md: "15%" },
        padding: "8px",
        zIndex: 1100,
        paddingLeft:"8"
        
      }}
    >
      <AppBar
        position="static"
        sx={{
          width: "100%",
          height: { xs: "60px", md: "45px" },
          display: "flex",
          justifyContent: "center",
          backgroundColor: "background.paper",
          boxShadow: 1,
          gap: { xs: 1, md: 2 },
        }}
      >
        <Toolbar
          sx={{
            minHeight: { xs: "60px", md: "45px" },
            padding: { xs: "0 8px", md: "0 16px" },
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "space-between", md: "center" },
          }}
        >
          <Box
            component={Link}
            to="/"
            sx={{
              display: { xs: "block", md: "none" },
              width: "40px",
              height: "40px",
            }}
          >
            <Box
              component="img"
              alt="SoleSphere Logo"
              src="/assets/logo.png"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "flex-end", md: "center" },
              width: "100%",
            }}
          >
            <IconButton
              color="inherit"
              component={Link}
              to="/cart"
              sx={{
                fontSize: { xs: "1rem", md: "1.25rem" },
              }}
            >
              <Badge badgeContent={cartItemsCount} color="error">
                <ShoppingCart sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }} />
              </Badge>
            </IconButton>
            {isAuthenticated ? (
              <>
                <Box
                  component="span"
                  sx={{
                    marginRight: 2,
                    paddingLeft:2,
                    fontSize: { xs: "0.75rem", md: "1rem" },
                  }}
                >
                  {`Welcome, ${user?.name}`}
                </Box>
                <IconButton
                  color="inherit"
                  onClick={handleLogout}
                  sx={{
                    fontSize: { xs: "1rem", md: "1.25rem" },
                  }}
                >
                  <Logout sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }} />
                </IconButton>
              </>
            ) : (
              <>
                <Button
                  color="inherit"
                  component={Link}
                  to="/login"
                  sx={{
                    fontSize: { xs: "0.875rem", md: "1rem" },
                    textTransform: "none",
                  }}
                >
                  Login
                </Button>
                <Button
                  color="inherit"
                  component={Link}
                  to="/register"
                  sx={{
                    fontSize: { xs: "0.875rem", md: "1rem" },
                    textTransform: "none",
                  }}
                >
                  Register
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
