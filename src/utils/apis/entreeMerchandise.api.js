import api from "./api";

export async function createEntreeMerchandiseApi(data) {
  const token = localStorage.getItem("user-restauration-token");
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "Application/json",
    Authorization: `Bearer ${token}`,
  };
  return new Promise((resolve, reject) => {
    api
      .post("/api/merchandise/entree", data, { headers })
      .then((result) => resolve(result.data))
      .catch((error) => {
        console.log(error);
        return reject(error.response?.data.error || error);
      });
  });
}
export async function updateEntreeMerchandiseApi(data) {
  console.log("api", data);
  const token = localStorage.getItem("user-restauration-token");
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "Application/json",
    Authorization: `Bearer ${token}`,
  };
  return new Promise((resolve, reject) => {
    api
      .put("/api/merchandise/entree/" + data.entree.id, data.entree, {
        headers,
      })
      .then((result) => resolve(result.data))
      .catch((error) => {
        console.log(error);
        return reject(error.response?.data.error || error);
      });
  });
}
export async function findEntreeMerchandiseApi() {
  const token = localStorage.getItem("user-restauration-token");
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "Application/json",
    Authorization: `Bearer ${token}`,
  };
  return new Promise((resolve, reject) => {
    api
      .get("/api/merchandise/entree", { headers })
      .then((result) => resolve(result.data))
      .catch((error) => {
        console.log(error);
        return reject(error.response?.data.error || error);
      });
  });
}
export async function deleteEntreeMerchandiseApi({ id, enntreId }) {
  const token = localStorage.getItem("user-restauration-token");
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "Application/json",
    Authorization: `Bearer ${token}`,
  };
  return new Promise((resolve, reject) => {
    api
      .delete("/api/merchandise/entree/" + id + "/" + enntreId, { headers })
      .then((result) => resolve(result.data))
      .catch((error) => {
        console.log(error);
        return reject(error.response?.data.error || error);
      });
  });
}
