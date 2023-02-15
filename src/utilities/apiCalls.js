export const getData = (url) => {
  return fetch(url, {
  })
    .then(response => response.json())
    .catch(err => console.log(err))
}

export const getAllCounties = async () => {
  const url = "http://localhost:3000/api/v1/counties";
  const response = await fetch(url);
  if (response.status < 200 && response.status > 299) {
    throw response;
  }
  return response.json();
};

export const getAllTrails = async () => {
  const url = "http://localhost:3000/api/v1/trails";
  const response = await fetch(url);
  if (response.status < 200 && response.status > 299) {
    throw response;
  }
  return response.json();
};

export const getUserSavedTrails = async (id) => {
  const url = `http://localhost:3000/api/v1/user?id=${id}`;
  const response = await fetch(url);
  if (response.status < 200 && response.status > 299) {
    throw response;
  }
  return response.json();
};

export const postToFavorites = (newTrail, userId) => {
  return fetch("http://localhost:3000/api/v1/user-trails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "user_id": userId,
      "trail_id": newTrail
    })
  })
    .then(response => response.json())
}

export const deleteFromFavorites = (trailId, userId) => {
  return fetch("http://localhost:3000/api/v1/user-trails", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "user_id": userId,
      "trail_id": trailId
    })
  })
    .then(response => response.json())
    .then(() => console.log('delete call sent!'))
    .catch(err => console.log(err))
}