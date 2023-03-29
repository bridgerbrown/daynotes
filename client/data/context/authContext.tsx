import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState, ReactNode, FC } from "react";
import { auth } from "../firebase/firebase.config"

type AuthContextType = {
    children: ReactNode
}

const AuthContext = createContext<any>({} as AuthContextType)
export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({children}: AuthContextType) => {
    const [userFound, setUserFound] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUserFound(user?.email)
            setLoading(false)
        })
        return () => unsubscribe()
    }, [userFound])
    
      const logOut = async () => {
        setUserFound("");
        setLoading(true)
        await signOut(auth);
        setLoading(false)
      };

    return (
        <AuthContext.Provider value={{ 
            userFound,  
            logOut,
            loading,
            }}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}