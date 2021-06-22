const localDevelopersService = {
    initialize() {
        const developers = []
        localStorage.setItem('developers', JSON.stringify(developers))
    },
    add(item) {
        let newItem = {...item, id: Math.random()}
        const developers = JSON.parse(localStorage.getItem('developers'))
        developers.push(newItem)
        localStorage.setItem('developers', JSON.stringify(developers))
    },
    addMany(items) {
        const developers = JSON.parse(localStorage.getItem('developers'))
        items.forEach(item => {
            developers.push(item)
            localStorage.setItem('developers', JSON.stringify(developers))
        })
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