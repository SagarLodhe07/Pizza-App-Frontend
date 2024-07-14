import axios from "axios";

const axiosIntance = axios.create()
axiosIntance.defaults.baseURL = import.meta.env.VITE_BASE_URL
axiosIntance.defaults.withCredentials = true

export default axiosIntance