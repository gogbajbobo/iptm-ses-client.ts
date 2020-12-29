import axios from 'axios'

const axiosInstance = axios.create()
axiosInstance.defaults.baseURL = 'http://localhost:8000'

export const login = (payload: object) => axiosInstance.post('/login', payload)
