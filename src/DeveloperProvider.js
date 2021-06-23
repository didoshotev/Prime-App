import { useState } from "react"
import DeveloperContext from "./DeveloperContext"

const DeveloperProvider = (props) => {

    const [developers, setDevelopers] = useState([]) 

// {name, id, busyDays:[{startDate: 23.06.2021, endDate: 23.06.2021}, ]}

    const addDeveloper = (inputValue) => {
        let newDev = {...inputValue, busyDays: [], id: Math.random()}
        const newDevs = [...developers, newDev]
        setDevelopers(newDevs)
    }

    const checkIfDevIsFree = (devID, startDate, endDate) => {
        developers.filter(item => {
            let checker = true;
            if(item.busyDays === []) {
                return true
            } 
        })
        
    }

    const hireDevelopers = (developersSelected, startDate, endDate) => {
        // console.log('selected devs', developersSelected);
        // console.log('all devs', developers);
        
        for(let j = 0; j < developersSelected.length; j++) {
            let currentDev = developersSelected[j];

            for(let i = 0; i < developers.length; i++) {
                
                if(developers[i].id === currentDev.id) {
                    let devNewBusyDays = [...developers[i].busyDays, {startDate: currentDev.startDate, endDate: currentDev.endDate}]
                    console.log('new dev busy days', devNewBusyDays);
                    
                    const newCurrent = {...developers[i]}
                    const newDevs = [...developers]

                    newCurrent.busyDays = devNewBusyDays
                    newDevs[i] = newCurrent

                    console.log('all developers', developers);
                    console.log('old current', developers[i]);

                    console.log('new current', newCurrent);
                    console.log('all new', newDevs);
                   
                    setDevelopers(newDevs)
                }
            }

        }

        
    }

    return (
        <DeveloperContext.Provider 
        value={{
            developers,
            addDeveloper,
            checkIfDevIsFree,
            hireDevelopers
        }}>
            { props.children }
        </DeveloperContext.Provider>
    )
}

export default DeveloperProvider