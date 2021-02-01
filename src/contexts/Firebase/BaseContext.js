import React from "react";
import Firebase from "./base";

export const BaseContext = React.createContext(null);

export const BaseContextProvider = (props) => {
    return(
        <BaseContext.Provider value={new Firebase()}>
            {props.children}
        </BaseContext.Provider>
    )
}