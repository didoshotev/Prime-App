import React from "react";
import { useState } from "react";
import { useEffect } from "react"
import UserContext from "./Context";
import Navigation from "./navigation";
import LocalService from "./services/services";

const App = (props) => {
    const [state, setState] = useState({
        loggedIn: false,
        user: null,
        hiredDevelopers: [], //{ name: Example, id: 0.111, startDate, endDate }
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

    const hireDevelopers = (developers) => { // arr
        const newDevs = [...state.hiredDevelopers, developers]
        setState({
            ...state,
            hiredDevelopers: newDevs 
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
                hiredDevelopers,
                hireDevelopers
            }}>
                { props.children }
                <Navigation />
            </UserContext.Provider>
        </>
    )
}

export default App