import axios from 'axios'

const API_URL = 'http://localhost:8000'

export default class CustomersService {
    constructor() {
    }

    createOrder = (order) => {
        const url = `${API_URL}/api/order/`
        return axios.post(url, order)
    }
    
    createUser = (user) => {
        const url = `${API_URL}/api/user/`
        return axios.post(url, user)
    }
}