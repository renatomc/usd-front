import api from "../config/api";

export const getData = async () => {
  const responseData = await api.get("/data");
  return responseData.data.data;
};

export const getDetail = async (id: number | string) => {
  const responseDetail = await api.get(`/detail?id=${id}`);
  return responseDetail.data.data;
}