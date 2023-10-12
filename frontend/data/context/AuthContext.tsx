import React, { createContext, useState, useContext } from "react";

interface AuthContextType {
  userData: any;
  setUserData: React.Dispatch<React.SetStateAction<any>>;
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
  const [userData, setUserData] = useState<any>(null);
  const [token, setToken] = useState<any>(null);

  return (
    <AuthContext.Provider value={{ userData, setUserData, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}
