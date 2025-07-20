import axios from "axios";

export const getGalleries = (page, genreId='') => {
    const API_URL = import.meta.env.VITE_API_URL;
    if(genreId==='') return axios.get(`${API_URL}/galleries/${page}`);
    return axios.get(`${API_URL}/galleries/${page}/genre/${genreId}`);
}