import React, { createContext, useContext, useEffect, useState, ReactNode, FC } from "react";

type AuthContextType = {
    children: ReactNode
}

const AuthContext = createContext<any>({} as AuthContextType)
export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({children}: AuthContextType) => {
    const [usersId, setUsersId] = useState<string>()

    return (
        <AuthContext.Provider value={{
            setUsersId,
            usersId
            }}>
            {children}
        </AuthContext.Provider>
    )
}