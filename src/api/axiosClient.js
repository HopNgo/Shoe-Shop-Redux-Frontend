import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL_HEROKU}/api`,
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
