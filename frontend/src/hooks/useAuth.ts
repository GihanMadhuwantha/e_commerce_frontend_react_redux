import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { signUp, login, logout } from "../redux/slices/authSlice";
import { useToaster } from "../context/ToasterContext";

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showToaster } = useToaster();
  const { isAuthenticated, user, hashedPasswords } = useSelector(
    (state: RootState) => state.auth
  );
    //dispatch details to the auth slice
  const handleSignUp = (name: string, email: string, password: string) => {
    try {
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);
      dispatch(signUp({ name, email, hashedPassword }));
      showToaster("Registration successful! Please log in.", "success");
      navigate("/login");
    } catch (error) {
      showToaster("An error occurred during registration. Please try again.", "error");
    }
  };

  const handleLogin = (email: string, password: string) => {
    const user = hashedPasswords.find((u) => u.email === email);
    if (user && bcrypt.compareSync(password, user.hashedPassword)) {
      dispatch(login({ name: user.name, email: user.email }));
      showToaster("Login successful", "success");
      navigate("/");
    } else {
      showToaster("Invalid credentials", "error");
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    showToaster("Signout successful", "success");
    navigate("/");
  };

  return { isAuthenticated, user, handleSignUp, handleLogin, handleLogout };
};
