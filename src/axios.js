import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/',
});

axiosInstance.interceptors.request.use(function (config) {
    const token = localStorage["at"]
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

axiosInstance.interceptors.response.use(
    response => response,
    function (error) {
        console.log(error.response.status)
        if (error.response.status === 401) {
            localStorage.removeItem("at");
        }
        return error
    })

export default axiosInstance;