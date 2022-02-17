import axiosClient from './axiosClient.js';

export const getComments = () => {
    const url = `/getComments`;
    return axiosClient.get(url);
}

export const addComment = (payload) => {
    const url = `/addComment`;
    return axiosClient.post(url, payload);
}

export const deleteComment = (payload) => {
    const url = `/deleteComment`;
    return axiosClient.post(url, payload);
}

export const updateComment = (payload) => {
    const url = `/updateComment`;
    return axiosClient.post(url, payload);
}
