import { loggedReducer } from "./isLogged";
import { combineReducers } from "redux";
import { trailsReducer } from "./trails";
import { countiesReducer } from "./counties";
import { usersReducer } from "./users";
import { selectedUserReducer } from "./selectedUser";
import { selectedTrailReducer } from "./selectedTrail";
import { savedTrailsReducer } from "./savedTrails";
import { favoriteTrailsReducer } from "./favoriteTrails";

const rootReducer = combineReducers({
  isLogged: loggedReducer,
  trails: trailsReducer,
  counties: countiesReducer,
  users: usersReducer,
  selectedUser: selectedUserReducer,
  favoriteTrails: favoriteTrailsReducer,
  selectedTrail: selectedTrailReducer,
  savedTrails: savedTrailsReducer,
});

export default rootReducer;
