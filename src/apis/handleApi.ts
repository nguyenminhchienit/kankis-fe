import axiosClient from "./axiosClient";

const handleApi = async (
  url: string,
  data: any,
  method?: "post" | "get" | "put" | "delete"
) => {
  return await axiosClient(url, {
    method: method ?? "get",
    data,
  });
};

export default handleApi;
