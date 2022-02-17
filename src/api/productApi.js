import axiosClient from './axiosClient.js';

const productApi = {
    getAll: () => {
        const url = `/product`;
        return axiosClient.get(url);
    }
}

export default productApi;