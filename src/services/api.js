import axios from "axios";
const api = axios.create({
    baseURL: 'https://backend-portalturismo-wko4.onrender.com/api'
})
export default api;