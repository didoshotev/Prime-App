import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login/Login"
import RegisterPage from "./pages/register/Register"
import Create from "./pages/create/Create";
import DashboardPage from "./pages/dashboard/Dashboard";
import { useContext } from "react";
import UserContext from "./Context";
import { Dashboard } from "@material-ui/icons";

const Navigation = (props) => {
    const context = useContext(UserContext)
    const { loggedIn } = context
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/register" component={() => !loggedIn ? <RegisterPage/> : <Home/>} />
                <Route path="/login" component={() => !loggedIn ? <Login/> : <Home/>} />
                <Route path="/dashboard" component={() => loggedIn ? <DashboardPage/> : <Login/>} />
                <Route path="/create" component={() => loggedIn ? <Create/> : <Login/>} />

            </Switch>
        </BrowserRouter>
    )
}

export default Navigation