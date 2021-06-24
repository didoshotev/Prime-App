const localDevelopersService = {
    initialize() {
        const developers = []
        const developersSchedule = []  // [{id: 0.34343, busyDays: [ {startDate: '12.01.2021', endDate: '25.01.2021'}, ] }]
        localStorage.setItem('developers', JSON.stringify(developers))  //{startDate: '01.01.2021', endDate: '05.01.2021'}
        localStorage.setItem('developersSchedule', JSON.stringify(developersSchedule))
    },
    add(item) {
        let id = Math.random();
        let newItem = { ...item, id }
        const developers = JSON.parse(localStorage.getItem('developers'))
        developers.push(newItem)
        localStorage.setItem('developers', JSON.stringify(developers))

        let initSchedule = { id, name: item.name, busyDays: [] }
        let developersSchedule = JSON.parse(localStorage.getItem('developersSchedule'));
        // developersSchedule.push(initSchedule);
        developersSchedule = [...developersSchedule, initSchedule];
        localStorage.setItem('developersSchedule', JSON.stringify(developersSchedule))
    },


    addToSchedule(selectedDevelopers, startDate, endDate) {
        let developersSchedule = JSON.parse(localStorage.getItem('developersSchedule'))
        for (let i = 0; i < developersSchedule.length; i++) {
            let currentDevSchedule = developersSchedule[i];
            selectedDevelopers.forEach(selectedDev => {
                if (selectedDev.id === currentDevSchedule.id) {
                    currentDevSchedule.busyDays.push({ startDate: startDate, endDate: endDate })
                    developersSchedule[i] = currentDevSchedule
                    localStorage.setItem('developersSchedule', JSON.stringify(developersSchedule))
                }
            })
        }
    },

    checkSchedule(startDate, endDate) {
        let developersSchedule = JSON.parse(localStorage.getItem('developersSchedule'))
        let freeDevelopersAtThisTime = []
        for (let i = 0; i < developersSchedule.length; i++) {
            let currentDevSchedule = developersSchedule[i];
            let checker = true
            if (currentDevSchedule.busyDays.length === 0) {
                // freeDevelopersAtThisTime.push(currentDevSchedule.id)
                checker = false
            } else {
                currentDevSchedule.busyDays.forEach(datesObj => {
                    let currStartDate = new Date(Date.parse(datesObj.startDate));
                    let currEndDate = new Date(Date.parse(datesObj.endDate));
                    let selectedStartDate = new Date(Date.parse(startDate));
                    let selectedEndDate = new Date(Date.parse(endDate));
                    if (selectedStartDate < currStartDate && selectedEndDate < currStartDate) {
                        checker = false
                    } else if (selectedStartDate > currEndDate && selectedEndDate > currEndDate) {
                        checker = false
                    } else {
                        checker = true
                    }
                })
            }
            if (checker === false) {
                freeDevelopersAtThisTime.push(currentDevSchedule.id)
            }
        }
        return freeDevelopersAtThisTime
    },

    remove(itemID) {
        const developers = JSON.parse(localStorage.getItem('developers'))
        const newDevelopers = developers.filter((item) => item.id !== itemID)
        localStorage.setItem('developers', JSON.stringify(newDevelopers))
        
        const developersSchedule = JSON.parse(localStorage.getItem('developersSchedule'))
        const newDevelopersSchedule = developersSchedule.filter((item) => item.id !== itemID)
        localStorage.setItem('developersSchedule', JSON.stringify(newDevelopersSchedule))
    },

    edit(newDeveloperData, id) {
        const developers = JSON.parse(localStorage.getItem('developers'))
        const currIndex = developers.findIndex((dev) => dev.id === newDeveloperData.id)
        developers.splice(currIndex, 1, newDeveloperData)
        localStorage.setItem('developers', JSON.stringify(developers))

        const developersSchedule = JSON.parse(localStorage.getItem('developersSchedule'))
        const currSchedulerIndex = developersSchedule.findIndex((dev) => dev.id === newDeveloperData.id)
        const currDevSchedule = developersSchedule.find((dev) => dev.id === newDeveloperData.id)
        const modifiedDevSchedule = {...currDevSchedule, name: newDeveloperData.name}
        developersSchedule.splice(currSchedulerIndex, 1, modifiedDevSchedule)
        localStorage.setItem('developersSchedule', JSON.stringify(developersSchedule))
    },

    getMany() {
        return JSON.parse(localStorage.getItem('developers'))
    },

    getOne(id) {
        const developers = JSON.parse(localStorage.getItem('developers'))
        return developers.find(dev => dev.id === id)
    },

    clear() {
        localStorage.clear()
    },
}

export default localDevelopersService