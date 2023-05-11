export const favoriteTrailsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ALL_FAVORITES":
      return action.payload;
    case "ADD_TO_FAVORITES":
      return [...state, action.payload];
    case "REMOVE_FROM_FAVORITES":
      return state.filter((trail) => trail.id !== action.payload);
    case "SIGN_OUT":
      return [];
    default:
      return state;
  }
};
