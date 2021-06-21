import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login"
import RegisterPage from "./pages/Register"

const Navigation = (props) => {

    console.log(123);
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation