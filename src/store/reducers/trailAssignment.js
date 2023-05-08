export const assignTrails = (state = {}, action) => {
  switch (action.type) {
    case "ASSIGN_TRAILS":
      return action.payload;
    default:
      return state;
  }
};
