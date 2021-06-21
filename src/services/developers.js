const localDataService = {
    initialize() {
        const developers = []
        localStorage.setItem('developers', JSON.stringify(developers))
    },
    addToLocalData(item) {
        const developers = JSON.parse(localStorage.getItem('developers'))
        developers.push(item)
        localStorage.setItem('developers', JSON.stringify(developers))
    },
    addManyToLocalData(items) {
        const developers = JSON.parse(localStorage.getItem('developers'))
        items.forEach(item => {
            developers.push(item)
            localStorage.setItem('developers', JSON.stringify(developers))
        })
    },

    removeFromLocalData(itemID) {
        const developers = JSON.parse(localStorage.getItem('developers'))
        const newDevelopers = developers.filter((item) => item.id !== itemID)
        localStorage.setItem('developers', JSON.stringify(newDevelopers))
    },

    editFromLocalData(newDeveloperData, id) {
        const developers = JSON.parse(localStorage.getItem('developers'))
        const currentDeveloper = developers.filter((dev) => dev.id === id);
        this.removeFromLocalData(id)
        this.addManyToLocalData(newDeveloperData)
    },

    getDevelopers() {
        return JSON.parse(localStorage.getItem('developers'))
    },

    getDeveloper(id) {
        const developers = JSON.parse(localStorage.getItem('developers'))
        return developers.filter(dev => dev.id === id)
    },

    clear() {
        localStorage.clear()
    },
}

export default localDataService