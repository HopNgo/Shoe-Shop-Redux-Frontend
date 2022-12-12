import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://shoe-shop-redux-backend-6kdi.onrender.com/api",
  headers: {
    "content-type": "application/json",
  },
});

axiosClient.interceptors.request.use(async (config) => {
  const localStorageToken = localStorage.getItem("accessToken");

  if (localStorageToken) {
    config.headers.Authorization = `Bearer ${localStorageToken}`;
  }
  return config;
});

export default axiosClient;
