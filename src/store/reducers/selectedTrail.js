export const selectedTrailReducer = (
  state = { data: { attributes: { name: "signed-out" } } },
  action
) => {
  switch (action.type) {
    case "SET_TRAIL":
      return action.payload;
    default:
      return state;
  }
};
