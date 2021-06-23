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
        let developersSchedule = JSON.parse(localStorage.getItem('developersSchedule'))
        developersSchedule.push(initSchedule)
        localStorage.setItem('developersSchedule', JSON.stringify(developersSchedule))
    },


    addToSchedule(selectedDevelopers, startDate, endDate) {
        let developersSchedule = JSON.parse(localStorage.getItem('developersSchedule'))
        for (let i = 0; i < developersSchedule.length; i++) {
            let currentDevSchedule = developersSchedule[i];
            selectedDevelopers.map(selectedDev => {
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
            let checker = false
            if (currentDevSchedule.busyDays.length === 0) {
                freeDevelopersAtThisTime.push(currentDevSchedule.id)
            } else {
                currentDevSchedule.busyDays.map(datesObj => {
                    let currStartDate = (datesObj.startDate);
                    let currEndDate = (datesObj.endDate);
                    console.log('111111111111111111111111111111111');

                    console.log('startDate',startDate);
                    console.log('endDate', endDate);
                    console.log('currStartDate', currStartDate);
                    console.log('currEndDate', currEndDate);

                    // console.log('startDate > currStartDate && startDate < currEndDate');
                    // console.log(startDate > currStartDate && startDate < currEndDate);
                    // console.log('endDate < currEndDate && endDate > currStartDate');
                    // console.log(endDate < currEndDate && endDate > currStartDate);

                    if (startDate > currEndDate) {
                        checker = true
                    } else if (endDate < currStartDate) {
                        checker = true
                    }

                    if (checker === true) {
                        console.log('PUSHING NEW DEV');
                        freeDevelopersAtThisTime.push(currentDevSchedule.id)
                        checker = false
                    }
                })
            }
        }
        console.log('FREE DEVELOPERS IDS AT THIS TIME', freeDevelopersAtThisTime);
        return freeDevelopersAtThisTime
    },

    remove(itemID) {
        const developers = JSON.parse(localStorage.getItem('developers'))
        const newDevelopers = developers.filter((item) => item.id !== itemID)
        localStorage.setItem('developers', JSON.stringify(newDevelopers))
    },

        edit(newDeveloperData, id) {
    const developers = JSON.parse(localStorage.getItem('developers'))
    const currentDeveloper = developers.filter((dev) => dev.id === id);
    this.removeFromLocalData(id)
    this.addManyToLocalData(newDeveloperData)
},

getMany() {
    return JSON.parse(localStorage.getItem('developers'))
},

getOne(id) {
    const developers = JSON.parse(localStorage.getItem('developers'))
    return developers.filter(dev => dev.id === id)
},

clear() {
    localStorage.clear()
},
}

export default localDevelopersService

// addMany(items) {
//     const developers = JSON.parse(localStorage.getItem('developers'))
//     items.forEach(item => {
//         developers.push(item)
//         localStorage.setItem('developers', JSON.stringify(developers))
//     })
// },