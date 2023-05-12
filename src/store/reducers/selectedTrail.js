export const selectedTrailReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_TRAIL":
      return action.payload;
    default:
      return state;
  }
};
