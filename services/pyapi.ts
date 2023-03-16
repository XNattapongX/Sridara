import axios from "axios";

const url =
  "http://2f40-2403-6200-8830-bc90-31a5-c5bd-c542-2c21.ap.ngrok.io/api/";
// const url = "https://back-end-tour.vercel.app/api/"

const api = axios.create({
  baseURL: url,
});

export const create_data = async (collection: string, data: any) => {
  const response = await api.post(collection, data);
  return response.data;
};

export const read_all_data = async (collection: string) => {
  const response = await api.get(collection);
  return response.data;
};

export const read_one_data = async (collection: string, id: string) => {
  const response = await api.get(`${collection}/${id}`);
  return response.data;
};

export const delete_data = async (collection: string, id?: string) => {
  const response = await api.delete(`${collection}/${id}`);
  return response.data;
};

export const update_data = async (
  collection: string,
  id: string,
  data: any
) => {
  const response = await api.put(`${collection}/${id}`, data);
  return response.data;
};

export const genRanDec = (size: number) =>
  [...Array(size)]
    .map(() => Math.floor(Math.random() * 10).toString(10))
    .join("");
