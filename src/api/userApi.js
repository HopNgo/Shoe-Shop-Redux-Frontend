import axiosClient from "./axiosClient.js";

const userApi = {
  signIn: (payload) => {
    const url = `/signin`;
    return axiosClient.post(url, payload);
  },
  signUp: (payload) => {
    const url = `/signup`;
    return axiosClient.post(url, payload);
  },
  loadUser: () => {
    const url = "/authenticated";
    return axiosClient.get(url);
  },
  updateNameUser: (payload) => {
    const url = "/updateNameUser";
    return axiosClient.post(url, payload);
  },
  updateUsernameUser: (payload) => {
    const url = "/updateUsernameUser";
    return axiosClient.post(url, payload);
  },
  updatePasswordUser: (payload) => {
    const url = "/updatePasswordUser";
    return axiosClient.post(url, payload);
  },
};

export default userApi;
