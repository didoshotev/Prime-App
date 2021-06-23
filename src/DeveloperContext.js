import React from 'react'

const DeveloperContext = React.createContext({
    developers: [],
    addDeveloper: () => {},
    validateDeveloper: () => {},
    hireDevelopers: () => {},
})

export default DeveloperContext