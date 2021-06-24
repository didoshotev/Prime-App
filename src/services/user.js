const localUserService = {

    initialize() {
        const users = []
        localStorage.setItem('users', JSON.stringify(users))
    },

    registerUser(inputValues) {
        const newUser = { ...inputValues, hiredDevelopers: [], id: Math.random(9999), loggedIn: true }
        const users = JSON.parse(localStorage.getItem('users'))
        users.push(newUser)
        localStorage.setItem('users', JSON.stringify(users))
        return newUser
    },

    loginUser(user) {
        const users = JSON.parse(localStorage.getItem('users'))
        let currentUser = users.find(u => u.name === user.name && u.password === user.password)
        if (currentUser === undefined) {
            return null
        }
        let index = users.findIndex(user => user.id === currentUser.id)
        currentUser = { ...currentUser, loggedIn: true }

        users.splice(index, 1, currentUser)
        localStorage.setItem('users', JSON.stringify(users))
        return currentUser
    },

    logOut(currentUserID) {
        const users = JSON.parse(localStorage.getItem('users'))
        let currentUser = users.find(user => user.id === currentUserID)
        let index = users.findIndex(user => user.id === currentUserID)
        currentUser = { ...currentUser, loggedIn: false }
        if (currentUser === undefined) {
            return false
        }
        users.splice(index, 1, currentUser)
        localStorage.setItem('users', JSON.stringify(users))
        return true
    },

    getUserID() {
        const users = JSON.parse(localStorage.getItem('users'))
        const currentUser = users.find(user => user.loggedIn === true)
        if (currentUser === undefined) {
            return null
        }
        return currentUser.id
    },

    hireDeveloper(developer, currentUserID) {
        const users = JSON.parse(localStorage.getItem('users'));
        const currentUser = users.find(user => user.id === currentUserID)
        const currIndex = users.findIndex(user => user.id === currentUserID)
        currentUser.hiredDevelopers.push(developer);
        users.splice(currIndex, 0, currentUser)
        localStorage.setItem('users', JSON.stringify(users))
    },

    hireManyDevelopers(developers) {
        const users = JSON.parse(localStorage.getItem('users'));
        let currUserID = this.getUserID()
        developers.forEach(dev => {
            const currentUser = users.find(user => user.id === currUserID)
            const currIndex = users.findIndex(user => user.id === currUserID)
            currentUser.hiredDevelopers.push(dev)
            users.splice(currIndex, 0, currentUser)
            localStorage.setItem('users', JSON.stringify(users))
        })
    },

    getHiredDevelopers() {
        const users = JSON.parse(localStorage.getItem('users'));
        let currUserID = this.getUserID()
        const currentUser = users.find(user => user.id === currUserID)
        if (currentUser) {
            return currentUser.hiredDevelopers;
        }
        return null
    },
}

export default localUserService