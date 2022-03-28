import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "content-type": "application/json",
  },
});

axiosClient.interceptors.request.use(async (config) => {
  const localStorageToken = localStorage.getItem("accessToken");
  console.log(localStorageToken);
  if (localStorageToken) {
    config.headers.Authorization = `Bearer ${localStorageToken}`;
  }
  return config;
});

export default axiosClient;
