import React, { createContext, useContext, useEffect, useState } from "react";


export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        //console.log(token)
        if (token) {
            setUser({ token }); 
        } else {
            setUser(null);
        }
    }, []);

    const onLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

return (
    <AuthContext.Provider value={user}>
        {children}
    </AuthContext.Provider>
)
}


