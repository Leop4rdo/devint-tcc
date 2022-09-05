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

    NULL_FIELD : {
        message : 'Field can not be null',
        code : 'UE0003'
    },

    USER_CAN_NOT_BE_DELETED : {
        message : 'User can not be deleted!',
        code : 'UE0004'
    },

    INVALID_DATA : {
        message: 'Invalid data',
        code : 'UE0005'
    },
    
    ROUTE_NOT_FOUND : {
        message : 'Are u lost baby girl? read the api docs and find your way!',
        code : 'UE0000'
    },

    NOT_AUTHENTICATED : {
        message : 'You need to be authenticated to access this route!',
        code : "UE0006"
    }
}

export default errors;