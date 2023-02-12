import counterReducer from './counter'
import loggedReducer from './isLogged'
import assignUsers from './userAssignment'
import assignTrails from './trailAssignment'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    users: assignUsers,
    trails: assignTrails
})

export default rootReducer