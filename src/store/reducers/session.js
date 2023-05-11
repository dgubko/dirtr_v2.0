export const sessionReducer = (state = { isLogged: false }, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { isLogged: true, userId: action.payload };
    case "SIGN_OUT":
      return { isLogged: false };
    default:
      return state;
  }
};
