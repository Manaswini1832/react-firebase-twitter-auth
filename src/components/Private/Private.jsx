import { useContext } from "react";
import { Redirect } from "react-router-dom";
import app from "firebase/app";

import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const Private = () => {

    const user = useContext(AuthContext);

    async function signOut(){
        await app.auth().signOut();
    }

    return(
        <div>
            <h1>Private page</h1>
            <button onClick={signOut}>Sign out</button>
        </div>
    )
}

export default Private;