export const trailsReducer = (state = [], action) => {
  switch (action.type) {
    case "SAVE_ALL_TRAILS":
      return action.payload;
    default:
      return state;
  }
};
