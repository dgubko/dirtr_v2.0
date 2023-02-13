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
