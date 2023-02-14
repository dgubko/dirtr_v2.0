export const cleanData = ({ data }) => {
  return data.map(({ attributes, id }) => {
    return { id, ...attributes };
  });
};
