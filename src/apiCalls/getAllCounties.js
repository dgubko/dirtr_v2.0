export const getAllCounties = async () => {
  const url = "http://localhost:3000/api/v1/counties";
  const response = await fetch(url);
  if (response.status < 200 && response.status > 299) {
    throw response;
  }
  return response.json();
};
