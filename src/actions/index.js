export const increment = (nr) => {
  return {
    type: "INCREMENT",
    payload: nr,
  };
};
export const decrement = (nr) => {
  return {
    type: "DECREMENT",
    payload: nr,
  };
};
export const logToggle = () => {
  return {
    type: "SIGN_IN",
  };
};

export const saveAllTrails = (trails) => ({
  type: "SAVE_ALL_TRAILS",
  payload: trails,
});

export const saveAllCounties = (counties) => ({
  type: "SAVE_ALL_COUNTIES",
  payload: counties,
});

export const assignUsers = (data) => {
  return {
    type: "ASSIGN_USERS",
    payload: data,
  };
};
export const assignTrails = (data) => {
  return {
    type: "ASSIGN_TRAILS",
    payload: data,
  };
};
export const setUser = (data) => {
  return {
    type: "SET_USER",
    payload: data,
  };
};
export const setTrail = (data) => {
  return {
    type: "SET_TRAIL",
    payload: data,
  };
};
