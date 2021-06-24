import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login/Login"
import RegisterPage from "./pages/register/Register"
import Create from "./pages/create/Create";
import DashboardPage from "./pages/dashboard/Dashboard";
import { useContext } from "react";
import UserContext from "./Context";
import Edit from "./pages/edit/Edit";
import Profile from './pages/profile/Profile'
import Core from './components/core/Core'

const Navigation = (props) => {
    const context = useContext(UserContext)
    const { loggedIn } = context
    return (
        <BrowserRouter>
            <Switch>
                <Core.Layout>
                    <Route path="/" exact component={Home} />
                    <Route path="/register" component={() => !loggedIn ? <RegisterPage /> : <Home />} />
                    <Route path="/login" component={() => !loggedIn ? <Login /> : <Home />} />
                    <Route path="/dashboard" component={() => loggedIn ? <DashboardPage /> : <Login />} />
                    <Route path="/create" component={() => loggedIn ? <Create /> : <Login />} />
                    <Route path="/edit" component={() => loggedIn ? <Edit /> : <Login />} />
                    <Route path="/profile" component={() => loggedIn ? <Profile /> : <Login />} />
                </Core.Layout>
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation