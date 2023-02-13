import loggedReducer from './isLogged'
import assignUsers from './userAssignment'
import assignTrails from './trailAssignment'
import setIndividualUser from './setIndividualUser'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    isLogged: loggedReducer,
    users: assignUsers,
    trails: assignTrails,
    selectedUser: setIndividualUser
})

export default rootReducer