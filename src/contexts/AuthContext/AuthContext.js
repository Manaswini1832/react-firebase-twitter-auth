import React, { useEffect, useState } from "react";
import app from "firebase/app";

export const AuthContext = React.createContext(null);

export const AuthContextProvider = (props) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        app.auth().onAuthStateChanged((userDetails) => {
            setUser(userDetails);
        });
    }, []);

    return(
        <AuthContext.Provider value={user}>
            {props.children}
        </AuthContext.Provider>
    )
} 