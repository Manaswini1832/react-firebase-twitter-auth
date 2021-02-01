import { useContext } from "react";
import { Redirect } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { BaseContext } from "../../contexts/Firebase/BaseContext";

const Home = () => {

    const user = useContext(AuthContext);
    const firebase = useContext(BaseContext);

    async function signIn(){
        await firebase.signUserIn();
    }

    return(
        <div>
            {
                user
                ? <Redirect to="/private" />
                : <div>
                    <h1>Home page</h1>
                    <button onClick={signIn}>Sign in with Twitter</button>
                </div>
            }
        </div>
    )
}

export default Home;