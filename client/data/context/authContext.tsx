import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect, useState, ReactNode, FC } from "react";
import { auth } from "../firebase/firebase.config"

type AuthContextType = {
    children: ReactNode
}

const AuthContext = createContext<any>({} as AuthContextType)
export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({children}: AuthContextType) => {
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    return (
        <AuthContext.Provider value={{ 
            loading,
            }}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}