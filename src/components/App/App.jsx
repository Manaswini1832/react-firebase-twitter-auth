import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "../Home/Home";
import Private from "../Private/Private";
import PrivateRoute from '../PrivateRoute';

const App = () => {
    return(
        <Router>
            <Route path="/" exact component={Home} />
            <PrivateRoute path="/private" exact component={Private} />
        </Router>
    )
}

export default App;