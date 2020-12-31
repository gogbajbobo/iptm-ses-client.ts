import axios from 'axios'
import { showError } from './messages'

const axiosInstance = axios.create()
axiosInstance.defaults.baseURL = 'http://localhost:8000'

export const login = (payload: object) =>
    axiosInstance.post('/login', payload)
        .then(response => response.data)
        .catch(showError)

export const logout = () =>
    axiosInstance.post('/logout')
        .then(response => response.data)
        .catch(showError)
