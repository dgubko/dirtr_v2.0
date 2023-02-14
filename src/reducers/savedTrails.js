export const savedTrails = (state = [], action) => {
  switch (action.type) {
    case "SAVE_ALL_USER_TRAILS":
      return action.payload;
    case "SAVE_USER_TRAIL":
      return [...state, action.payload];
    default:
      return state;
  }
};
