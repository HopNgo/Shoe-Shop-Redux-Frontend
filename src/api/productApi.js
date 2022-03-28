import axiosClient from "./axiosClient.js";

const productApi = {
  getAll: () => {
    const url = `/getAllProduct`;
    return axiosClient.get(url);
  },
  addProduct: (payload) => {
    const url = "/addProduct";
    return axiosClient.post(url, payload);
  },
  editProduct: (payload) => {
    const url = "/editProduct";
    return axiosClient.post(url, payload);
  },
  deleteProduct: (payload) => {
    const url = "/deleteProduct";
    return axiosClient.post(url, payload);
  },
};

export default productApi;
