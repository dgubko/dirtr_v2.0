export const cleanTrails = (data) => {
  return data.map((trail) => {
    return trail.attributes;
  });
};
