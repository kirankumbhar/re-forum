import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {Authorization: `Bearer ${localStorage['at']}`}
});

export default axiosInstance;