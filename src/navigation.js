import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login"
import RegisterPage from "./pages/register/Register"
import HirePage from './pages/Hire'
import Create from "./pages/create/Create";

const Navigation = (props) => {

    console.log(123);
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={Login} />
                <Route path="/hire" component={HirePage} />
                <Route path="/create" component={Create} />

            </Switch>
        </BrowserRouter>
    )
}

export default Navigation