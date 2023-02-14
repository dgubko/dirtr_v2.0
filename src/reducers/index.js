import loggedReducer from "./isLogged";
import { combineReducers } from "redux";
import { trailsReducer } from "./trails";
import { countyReducer } from "./counties";
import assignUsers from "./userAssignment";
import setIndividualUser from "./setIndividualUser";
import setIndividualTrail from "./setIndividualTrail";
import { savedTrails } from "./savedTrails";

const rootReducer = combineReducers({
  isLogged: loggedReducer,
  trails: trailsReducer,
  counties: countyReducer,
  users: assignUsers,
  selectedUser: setIndividualUser,
  selectedTrail: setIndividualTrail,
  savedTrails,
});

export default rootReducer;
