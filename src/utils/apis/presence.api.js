import { useQuery } from "react-query";
import api from "./api";

export function UseGetPresence(filter) {
  const token = localStorage.getItem("user-restauration-token");
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "Application/json",
    Authorization: `Bearer ${token}`,
  };
  const { isSuccess, isFetching, isError, data, refetch } = useQuery(
    ["presence"],
    () =>
      new Promise((resolve, reject) => {
        api
          .get("api/presence", { headers })
          .then((result) => resolve(result.data.data))
          .catch((error) => console.log(error));
      }),
    {
      refetchOnWindowFocus: false,
      select: (data) =>
        data?.filter((item, index) => {
          return item.employer === filter || filter === "all";
        }),
    }
  );
  return { isSuccess, data, refetch };
}
export function updatePresenceApi(id, data) {
  console.log("update");

  return new Promise((resolve, reject) => {
    api
      .put("api/presence/" + id, data)
      .then((result) => resolve(result.data.data))
      .catch((error) => reject(error));
  });
}
export function createPresenceApi(id, data) {
  console.log("create", data);
  return new Promise((resolve, reject) => {
    api
      .post("api/presence/" + id, data)
      .then((result) => resolve(result.data.data))
      .catch((error) => reject(error));
  });
}
