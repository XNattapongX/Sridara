import axios from "axios";

const base =
  "https://firestore.googleapis.com/v1/projects/sridara-tour/databases/(default)/documents";
export const api = axios.create({
  baseURL:
    "https://firestore.googleapis.com/v1/projects/sridara-tour/databases/(default)/documents/",
});

export const create_data = async (collection: string, data: any) => {
  const response = await api.post(collection, {
    fields: { add: { stringValue: "adding" } },
  });
  data.fields.id = { stringValue: response.data.name.split("/").at(-1) };
  const id = await api.patch(
    `${collection}/${response.data.name.split("/").at(-1)}`,
    data
  );
  return response.data.name.split("/").at(-1);
};

export const read_all_data = async (collection: string) => {
  const response = await api.get(collection);
  return response.data.documents;
};

export const read_one_data = async (collection: string, id: string) => {
  const response = await api.get(`${collection}/${id}`);
  return response.data;
};

export const update_data = async (
  collection: string,
  id: string,
  data: any
) => {
  const response = await api.patch(`${collection}/${id}`, data);
  return response.data;
};

export const delete_data = async (collection: string, id: string) => {
  const response = await api.delete(`${collection}/${id}`);
  return response.data;
};

export const read_all_data_conditions = async (
  collection: string,
  fields: string,
  values: string
) => {
  const response = await api.get(collection);
  const data = response.data.documents.filter(
    (doc: any) => doc.fields[fields].stringValue === values
  );
  return data;
};

export const delete_all_data_conditions = async (
  collection: string,
  fields: string,
  value: string
) => {
  const response = await api.get(collection);
  const data = response.data.documents.filter(
    (doc: any) => doc.fields[fields].stringValue === value
  );
  data.forEach((x: any) => {
    api.delete(`${collection}/${x.fields.id.stringValue}`).catch((err) => {
      console.log("no document");
    });
  });
};
