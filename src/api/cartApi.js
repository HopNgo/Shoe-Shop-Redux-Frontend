import axiosClient from "./axiosClient.js";

const cartApi = {
  orderCart: (payload) => {
    const url = `/orderCart`;
    return axiosClient.post(url, payload);
  },
  getAllCart: () => {
    const url = `/getAllCart`;
    return axiosClient.get(url);
  },
};

export default cartApi;
