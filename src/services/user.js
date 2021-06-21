const localUserService = {

    initialize() {
        const users = []
        localStorage.setItem('users', JSON.stringify(users))
    },

    registerUser(user) {
        const users = JSON.parse(localStorage.getItem('users'))
        developers.push(user)
        localStorage.setItem('users', JSON.stringify(user))
    },

    loginUser(user) {
        const users = JSON.parse(localStorage.getItem('users'))
        const currentUser = (users.filter(u => u.name === user.name))[0]
        if (currentUser === undefined) {
            return null
        }
        return currentUser
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

user = {
    id: '9213841',
    name: 'Ivan',
    password: '123',
    hiredDevelopers: [{id: 123, name: 'Tosho the Dev'}, 
        {id: 321, name: 'Koko', hiredFrom: '22.06.2021', hiredUntil: '01.09.2021'}]
}