import { createContext } from "react";

export const AuthContext = createContext({
  token: null,
  userId: null,
  login: (token: string, userId: string) => {},
  logout: () => {},
  isAuthenticated: false,
});
