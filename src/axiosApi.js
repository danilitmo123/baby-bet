import axios from 'axios'
import axiosAuthInstance from "./axiosAuthApi";

const axiosInstance = axios.create({
    baseURL: 'https://baby-bet-api.herokuapp.com/api/',
    timeout: 5000,
    headers: {
        'Authorization': "JWT " + localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        const originalRequest = error.config;

        if (error.response.status === 401 && error.response.statusText === "Unauthorized") {
            const refresh_token = localStorage.getItem('refresh_token');
            if (refresh_token !== null) {
                return axiosAuthInstance
                    .post('/token/refresh/', {refresh: refresh_token})
                    .then((response) => {

                        localStorage.setItem('access_token', response.data.access);
                        localStorage.setItem('refresh_token', response.data.refresh);

                        axiosAuthInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
                        originalRequest.headers['Authorization'] = "JWT " + response.data.access;

                        return axiosAuthInstance(originalRequest);
                    })
                    .catch(err => {
                        console.log(err)
                    });
            } else {
                window.location.href = '/login/';
                return Promise.reject(error);
            }
        }
        return Promise.reject(error);
    }
);
export default axiosInstance
