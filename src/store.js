import { createStore } from 'redux'
import rootReducer from './reducers'

const defaultState = {
  counter: 0,
  isLogged: false
}

const store = createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store