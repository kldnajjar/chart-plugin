import http from "./httpService";

export async function getData(type, id) {
  const { data } = await http.get(`${type}/${id}`);
  return data;
}
