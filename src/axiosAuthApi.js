import axios from "axios";


const axiosAuthInstance = axios.create({
    baseURL: 'https://baby-bet-api.herokuapp.com/api-auth/',
    timeout: 5000,
    headers: {
        'Authorization': "JWT " + localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});


export default axiosAuthInstance
