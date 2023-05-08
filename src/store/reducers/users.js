export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "ASSIGN_USERS":
      return action.payload;
    default:
      return state;
  }
};
