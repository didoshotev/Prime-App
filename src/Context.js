import React from 'react'

const UserContext = React.createContext({
    loggedIn: false,
    user: null,
    role: 'guest',
    logIn: () => {},
    logOut: () => {},
    hiredDevelopers: [],
    hireDevelopers: () => {},
})

export default UserContext