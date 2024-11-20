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

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  hashedPasswords: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action: PayloadAction<User>) => {
      state.hashedPasswords.push(action.payload);
    },
    login: (state, action: PayloadAction<{ name: string; email: string }>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { signUp, login, logout } = authSlice.actions;
export default authSlice.reducer;
