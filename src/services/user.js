const localUserService = {

    initialize() {
        const users = []
        localStorage.setItem('users', JSON.stringify(users))
    },

    registerUser(inputValues) {
        const newUser = {...inputValues, hiredDevelopers: [], id: Math.random(9999), loggedIn: true}
        const users = JSON.parse(localStorage.getItem('users'))
        users.push(newUser)
        localStorage.setItem('users', JSON.stringify(users))
        return newUser
    },

    loginUser(user) {
        const users = JSON.parse(localStorage.getItem('users'))
        let currentUser = users.find(u => u.name === user.name || u.password === user.password)
        if (currentUser === undefined) {
            return null
        }
        let index = users.findIndex(user => user.id === currentUser.id)
        currentUser = {...currentUser, loggedIn: true}
        
        users.splice(index, 1, currentUser)
        localStorage.setItem('users', JSON.stringify(users))
        return currentUser
    },

    logOut(currentUserID) {
        const users = JSON.parse(localStorage.getItem('users'))
        let currentUser = users.find(user => user.id === currentUserID)
        let index = users.findIndex(user => user.id === currentUserID)
        currentUser = {...currentUser, loggedIn: false}
        if(currentUser === undefined) {
            return false 
        }
        users.splice(index, 1, currentUser)
        localStorage.setItem('users', JSON.stringify(users))
         return true   
    },

    getUserID() {
        const users = JSON.parse(localStorage.getItem('users'))
        const currentUser = users.find(user => user.loggedIn === true)
        if(currentUser === undefined) {
            return null
        }
        return currentUser.id
    },

    hireDeveloper(developer, currentUserID) {
        const users = JSON.parse(localStorage.getItem('users'));
        const currentUser = users.find(user => user.id === currentUserID)
        currentUser.hiredDevelopers.push(developer);
    },

    hireManyDevelopers(developers, currentUserID) {
        const users = JSON.parse(localStorage.getItem('users'));
        const currentUser = users.find(user => user.id === currentUserID)
        developers.forEach(dev => {
            currentUser.hiredDevelopers.push(dev)
            localStorage.setItem('users', JSON.stringify(currentUser))
        })        
    },

    getHiredDevelopers(currentUserID) {
        const users = JSON.parse(localStorage.getItem('users'));
        const currentUser = users.find(user => user.id === currentUserID)
        return currentUser.hiredDevelopers;
    },
}

export default localUserService 

// user = {
//     id: '9213841',
//     name: 'Ivan',
//     password: '123',
//     hiredDevelopers: [{id: 123, name: 'Tosho the Dev'}, 
//         {id: 321, name: 'Koko', hiredFrom: '22.06.2021', hiredUntil: '01.09.2021'}]
// }