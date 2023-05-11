export const selectedUserReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_USER":
      return action.payload;
    case "SIGN_OUT":
      return null;
    default:
      return state;
  }
};
