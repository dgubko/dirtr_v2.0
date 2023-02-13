import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";
import { trailsReducer } from "./trails";
import { countyReducer } from "./counties";

const rootReducer = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  trails: trailsReducer,
  counties: countyReducer,
});

export default rootReducer;
