import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  name: string;
  email: string;
  hashedPassword: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: { name: string; email: string } | null;
  hashedPasswords: User[];
}

const storedUser = localStorage.getItem("authUser");
const storedAuthState = localStorage.getItem("isAuthenticated");
const storedPasswords = localStorage.getItem("hashedPasswords");

const initialState: AuthState = {
  isAuthenticated: storedAuthState === "true",
  user: storedUser ? JSON.parse(storedUser) : null,
  hashedPasswords: storedPasswords ? JSON.parse(storedPasswords) : [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action: PayloadAction<User>) => {
      const existingUser = state.hashedPasswords.find(
        (user) => user.email === action.payload.email
      );
      if (!existingUser) {
        state.hashedPasswords.push(action.payload);
        localStorage.setItem(
          "hashedPasswords",
          JSON.stringify(state.hashedPasswords)
        );
      } else {
        throw new Error("Email is already registered.");
      }
    },
    login: (state, action: PayloadAction<{ name: string; email: string }>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem("authUser", JSON.stringify(action.payload));
      localStorage.setItem("isAuthenticated", "true");
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("authUser");
      localStorage.setItem("isAuthenticated", "false");
    },
  },
});

export const { signUp, login, logout } = authSlice.actions;
export default authSlice.reducer;
