export const countiesReducer = (state = [], action) => {
  switch (action.type) {
    case "SAVE_ALL_COUNTIES":
      return action.payload;
    default:
      return state;
  }
};
