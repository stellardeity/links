import { createContext } from "react";

export const AuthContext = createContext({
  token: '',
  userId: '',
  login: (token: string, userId: string, rembmer: boolean) => {},
  logout: () => {},
  isAuthenticated: false,
});
