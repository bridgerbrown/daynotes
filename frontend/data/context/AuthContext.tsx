import React, { createContext, useState, useContext } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  userData: any;
  setUserData: React.Dispatch<React.SetStateAction<any>>;
  userEmail: string;
  setUserEmail: React.Dispatch<React.SetStateAction<any>>;
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Not in Auth provider");
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>(null);
  const [userEmail, setUserEmail] = useState<string>("");
  const [token, setToken] = useState<any>(null);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

   const contextValue: AuthContextType = {
      isAuthenticated,
      login,
      logout,
      userData,
      setUserData,
      userEmail,
      setUserEmail,
      token,
      setToken,
    };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}
