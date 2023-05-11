import { sessionReducer } from "./session";
import { combineReducers } from "redux";
import { trailsReducer } from "./trails";
import { countiesReducer } from "./counties";
import { usersReducer } from "./users";
import { selectedUserReducer } from "./selectedUser";
import { selectedTrailReducer } from "./selectedTrail";
import { savedTrailsReducer } from "./savedTrails";
import { favoriteTrailsReducer } from "./favoriteTrails";

const rootReducer = combineReducers({
  trails: trailsReducer,
  counties: countiesReducer,
  users: usersReducer,
  selectedUser: selectedUserReducer,
  favoriteTrails: favoriteTrailsReducer,
  selectedTrail: selectedTrailReducer,
  savedTrails: savedTrailsReducer,
  session: sessionReducer,
});

export default rootReducer;
