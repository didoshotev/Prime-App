import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react"
import UserContext from "./Context";
import Navigation from "./navigation";
import { localUserService } from "./services/user";

const App = (props) => {
    const [state, setState] = useState({
        loggedIn: false,
        user: null,
        hiredDevelopers: [],
    })

    useEffect(() => {
        localUserService.initialize()
    }, [])

    const logIn = (user) => {
        setState({
            ...state,
            loggedIn: true,
            user,
        })
    }

    const logOut = () => {
        setState({
            ...state,
            loggedIn: false,
            user: null,
        })
    }


    const { loggedIn, user, hiredDevelopers } = state
    return (
        <>
            <UserContext.Provider value={{
                loggedIn,
                logIn,
                logOut,
                user,
                hiredDevelopers
            }}>
                { props.children }
                <Navigation />
            </UserContext.Provider>
        </>
    )
}

export default App