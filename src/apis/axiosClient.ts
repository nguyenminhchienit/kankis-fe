/* eslint-disable @typescript-eslint/no-unused-expressions */
import axios from "axios";
import { error } from "console";
import queryString from "query-string";

const baseURL = "http://localhost:8888";

const axiosClient = axios.create({
  baseURL,
  paramsSerializer: (params) => {
    return queryString.stringify(params);
  },
});

axiosClient.interceptors.request.use(async (config: any) => {
  config.headers = {
    Authorization: "",
    Accept: "application/json",
    ...config.headers,
  };

  config.data;

  return config;
});

axiosClient.interceptors.response.use(
  (res: any) => {
    if (res.data && res.status >= 200 && res.status < 300) {
      return res.data;
    } else {
      return Promise.reject(res.data);
    }
  },
  (error) => {
    const { response } = error;
    return Promise.reject(response.data);
  }
);

export default axiosClient;
