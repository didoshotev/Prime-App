const developerProfileValidator = (data) => {
    let errorField = false 
    if(!data.name || data.name === "") {
        errorField = 'name'
    } else if (!data.email || data.email === "") {
        errorField = 'email'
    } else if (!data.phone || data.phone === "") {
        errorField = 'phone'
    } else if (!data.location || data.location === "") {
        errorField = 'location'
    } else if (!data.salary || data.salary === "") {
        errorField = 'salary'
    } else if (!data.technology || data.technology === "") {
        errorField = 'technology'
    } else if (!data.experience || data.experience === "") {
        errorField = 'experience'
    } else if (!data.language || data.language === "") {
        errorField = 'language'
    } 
    return errorField   
}

export { developerProfileValidator }