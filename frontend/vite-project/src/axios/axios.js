import axios from 'axios'

const api = axios.create({
    baseURL:'http://13.53.127.149:8000'
})

export default api;