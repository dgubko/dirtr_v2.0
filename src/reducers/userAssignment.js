const assignUsers = (state = [], action) => {
    switch(action.type) {
        case 'ASSIGN_USERS':
            return action.payload
        default:
            return state
    }
}

export default assignUsers