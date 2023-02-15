import { API_ROUTE } from "./constants";

// GET REQUESTS

export const getAllUsers = async () => {
  const url = `${API_ROUTE}/users`;
  const response = await fetch(url);
  if (response.status < 200 && response.status > 299) {
    throw response;
  }
  return response.json();
};

export const getAllCounties = async () => {
  const url = `${API_ROUTE}/counties`;
  const response = await fetch(url);
  if (response.status < 200 && response.status > 299) {
    throw response;
  }
  return response.json();
};

export const getAllTrails = async () => {
  const url = `${API_ROUTE}/trails`;
  const response = await fetch(url);
  if (response.status < 200 && response.status > 299) {
    throw response;
  }
  return response.json();
};

export const getSingleTrail = async (id) => {
  const url = `${API_ROUTE}/trail?id=${id}`;
  const response = await fetch(url);
  if (response.status < 200 && response.status > 299) {
    throw response;
  }
  return response.json();
};

export const getSingleUser = async (id) => {
  const url = `${API_ROUTE}/user?id=${id}`;
  const response = await fetch(url);
  if (response.status < 200 && response.status > 299) {
    throw response;
  }
  return response.json();
};

// POST REQUEST

export const postToFavorites = (newTrail, userId) => {
  return fetch(`${API_ROUTE}/user-trails`, {
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

// DELETE REQUEST

export const deleteFromFavorites = (trailId, userId) => {
  return fetch(`${API_ROUTE}/user-trails`, {
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