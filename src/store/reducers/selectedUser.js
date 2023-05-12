export const selectedUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_USER":
      return action.payload;
    case "SIGN_OUT":
      return {};
    default:
      return state;
  }
};
