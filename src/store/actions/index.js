export const logIn = () => ({
  type: "SIGN_IN",
});

export const logOut = () => ({
  type: "SIGN_OUT",
});

export const saveAllTrails = (trails) => ({
  type: "SAVE_ALL_TRAILS",
  payload: trails,
});

export const saveAllCounties = (counties) => ({
  type: "SAVE_ALL_COUNTIES",
  payload: counties,
});

export const assignUsers = (data) => ({
  type: "ASSIGN_USERS",
  payload: data,
});

export const assignTrails = (data) => ({
  type: "ASSIGN_TRAILS",
  payload: data,
});

export const setUser = (data) => ({
  type: "SET_USER",
  payload: data,
});

export const setTrail = (data) => ({
  type: "SET_TRAIL",
  payload: data,
});

export const saveAllUserTrails = (data) => ({
  type: "SAVE_ALL_USER_TRAILS",
  payload: data,
});

export const saveUserTrail = (data) => ({
  type: "SAVE_USER_TRAIL",
  payload: data,
});

export const addAllFavorites = (data) => ({
  type: "ADD_ALL_FAVORITES",
  payload: data,
});

export const addToFavorites = (data) => ({
  type: "ADD_TO_FAVORITES",
  payload: data,
});

export const removeFromFavorites = (data) => ({
  type: "REMOVE_FROM_FAVORITES",
  payload: data,
});
