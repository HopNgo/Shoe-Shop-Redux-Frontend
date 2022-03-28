import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://shoe-shop-app-hopngo.herokuapp.com/api",
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
