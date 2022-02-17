import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://shoe-shop-app-hopngo.herokuapp.com/api',
    headers: {
        'content-type': 'application/json',
    },
});


export default axiosClient;