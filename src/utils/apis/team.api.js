import { useQuery } from "react-query";
import api from "./api";

export async function findEmployerApi() {
  const token = localStorage.getItem("user-restauration-token");
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "Application/json",
    Authorization: `Bearer ${token}`,
  };
  return new Promise((resolve, reject) => {
    api
      .get("/api/employer", { headers })
      .then((result) => resolve(result.data))
      .catch((error) => reject(error.response.data.errors));
  });
}
export async function createEmployerApi(data) {
  return new Promise((resolve, reject) => {
    api
      .post("/api/employer", data)
      .then((result) => resolve(result.data))
      .catch((error) => reject(error.response.data.errors));
  });
}
export async function updateEmployerApi(data) {
  return new Promise((resolve, reject) => {
    api
      .put("/api/employer/" + data._id, data)
      .then((result) => resolve(result.data))
      .catch((error) => reject(error.response.data.errors));
  });
}
export async function deleteEmployerApi(id) {
  return new Promise((resolve, reject) => {
    api
      .delete("/api/employer/" + id)
      .then((result) => resolve(id))
      .catch((error) => reject(error.response.data.errors));
  });
}
export function UseRefrecherCodeApi(id) {
  const { isSuccess, isFetching, isError, refetch, data } = useQuery(
    ["team", id],
    () =>
      new Promise((resolve, reject) => {
        api
          .put(`api/employer/${id}/codeLogin`)
          .then((result) => resolve(result.data.data))
          .catch((error) => reject(error.response.data.errors));
      }),
    { refetchOnWindowFocus: false, enabled: false }
  );
  return {
    isFetching,
    refetch,
    data,
  };
}
