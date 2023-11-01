import React, { useState } from 'react'

export const AuthContext = React.createContext({
    isAuth : false ,
    login : () => {}
})

const AuthContextProvider = (props) => {

    const [ isLoggedIn , setIsLoggedIn ] = useState(false)

    const loginH = () => {
        setIsLoggedIn(true)
    }

    return (
        <AuthContext.Provider
            value = {{
                isAuth : isLoggedIn,
                login : loginH
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider