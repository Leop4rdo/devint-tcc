const errors = {
    BASE : {
        message : 'There was an unexpected error!',
        code : "SE0001"
    },

    ENTITY_NOT_FOUND : {
        message : 'Requested entity was not found!',
        code : "SE0002"
    },

    USER_EMAIL_ALREADY_IN_USE : {
        message : 'Email is already in use!',
        code : "UE0001"
    },

    LOGIN_FAILED : {
        message : 'Invalid user name or password!',
        code : 'UE0002'
    },
}

export default errors;