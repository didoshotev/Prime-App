import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react"
import UserContext from "./Context";
import Navigation from "./navigation";
import LocalService from "./services/services";

const App = (props) => {
    const [state, setState] = useState({
        loggedIn: false,
        user: null,
        hiredDevelopers: [],
    })

    useEffect(() => {
        console.log('INIT');
        LocalService.user.initialize()
        LocalService.developers.initialize()
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