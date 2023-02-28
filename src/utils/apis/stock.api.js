import api from "./api";

export async function findMerchandiseApi() {
  const token = localStorage.getItem("user-restauration-token");
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "Application/json",
    Authorization: `Bearer ${token}`,
  };
  return new Promise((resolve, reject) => {
    api
      .get("/api/merchandise", { headers })
      .then((result) => resolve(result.data))
      .catch((error) => reject(error.response.data.error));
  });
}

export async function createMerchandiseApi(data) {
  console.log(data) 
  const token = localStorage.getItem("user-restauration-token");
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "Application/json",
    Authorization: `Bearer ${token}`,
  };
  return new Promise((resolve, reject) => {
    api
      .post("/api/merchandise", data, { headers })
      .then((result) => resolve(result.data))
      .catch((error) => reject(error.response.data.error));
  });
}
export async function updateMerchandiseApi(data) {
  const token = localStorage.getItem("user-restauration-token");
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "Application/json",
    Authorization: `Bearer ${token}`,
  };
  return new Promise((resolve, reject) => {
    api
      .put("/api/merchandise/" + data._id, data, { headers })
      .then((result) => resolve(result.data))
      .catch((error) => {
        console.log(error);
        reject(error.response.data.error);
      });
  });
}

export async function deleteMerchandiseApi(id) {
  const token = localStorage.getItem("user-restauration-token");
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "Application/json",
    Authorization: `Bearer ${token}`,
  };
  return new Promise((resolve, reject) => {
    api
      .delete("/api/merchandise/" + id, { headers })
      .then((result) => resolve(id))
      .catch((error) => {
        console.log(error);
        reject(error.response.data.error);
      });
  });
}
