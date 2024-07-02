import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://api.chec.io/v1'
});

axiosInstance.interceptors.request.use(config => {
    config.headers["X-Authorization"] = process.env.REACT_APP_API_KEY;
    return config;
});