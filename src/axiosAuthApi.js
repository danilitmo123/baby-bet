import axios from "axios";


const axiosAuthInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api-auth/',
    timeout: 5000,
    headers: {
        'Authorization': "JWT " + localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});


export default axiosAuthInstance
