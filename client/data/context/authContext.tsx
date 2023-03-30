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
    const [userFound, setUserFound] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()

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
        router.push("/user/login")
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