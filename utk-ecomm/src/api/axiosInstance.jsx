import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: 'https://workintech-fe-ecommerce.onrender.com',
});