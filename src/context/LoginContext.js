import { createContext, useState } from "react";



export const LoginContext = createContext()

export const LoginProvider = ({children}) => {
    const [user, setUser] = useState({
        email: null,
        logged: false
    })
    
    return(
        <LoginContext.Provider value={{
            user
        }}>
            {children}
        </LoginContext.Provider>
    )
}