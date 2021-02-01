import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

import { AuthContextProvider } from "./contexts/AuthContext/AuthContext";
import { BaseContextProvider } from "./contexts/Firebase/BaseContext";

ReactDOM.render(
<BaseContextProvider>
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
</BaseContextProvider>
, document.getElementById("root"));