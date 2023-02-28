import api from "./api";

export async function createDestroyMerchandiseApi({ merchandise, data }) {
  const token = localStorage.getItem("user-restauration-token");
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "Application/json",
    Authorization: `Bearer ${token}`,
  };
  return new Promise((resolve, reject) => {
    api
      .post(`/api/merchandise/${merchandise}/destroy`, data, { headers })
      .then((result) => resolve(result.data))
      .catch((error) => {
        console.log(error);
        return reject(error.response?.data.error || error);
      });
  });
}
export async function findDestroyMerchandiseApi() {
  const token = localStorage.getItem("user-restauration-token");
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "Application/json",
    Authorization: `Bearer ${token}`,
  };
  return new Promise((resolve, reject) => {
    api
      .get(`/api/merchandise/destroy`, { headers })
      .then((result) => resolve(result.data))
      .catch((error) => {
        console.log(error);
        return reject(error.response?.data.error || error);
      });
  });
}
export async function deleteDestroyMerchandiseApi({ id, itemId }) {
  const token = localStorage.getItem("user-restauration-token");
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "Application/json",
    Authorization: `Bearer ${token}`,
  };
  return new Promise((resolve, reject) => {
    api
      .delete(`/api/merchandise/destroy/${id}/${itemId}`, { headers })
      .then((result) => resolve(result.data))
      .catch((error) => {
        console.log(error);
        return reject(error.response?.data.error || error);
      });
  });
}

export async function updateDestroyMerchandiseApi({ id, data }) {
  const token = localStorage.getItem("user-restauration-token");
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "Application/json",
    Authorization: `Bearer ${token}`,
  };
  return new Promise((resolve, reject) => {
    api
      .put(`/api/merchandise/destroy/${id}`, data, { headers })
      .then((result) => resolve(result.data))
      .catch((error) => {
        console.log(error);
        return reject(error.response?.data.error || error);
      });
  });
}
