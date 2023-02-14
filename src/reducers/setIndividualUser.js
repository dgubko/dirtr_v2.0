const setIndividualUser = (state = {data:{attributes:{name:'signed-out'}}}, action) => {
    switch(action.type) {
        case 'SET_USER':
            return action.payload
        default:
            return state
    }
}

export default setIndividualUser