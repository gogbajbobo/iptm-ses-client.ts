import axios from 'axios'
import { showError } from './messages'
import { logger } from '@/services/logger'

const axiosInstance = axios.create()
axiosInstance.defaults.baseURL = 'http://localhost:8021'

axiosInstance.interceptors.request.use(config => {

    const { method, url } = config
    logger.log(`send request ${ method }, ${ url }`)

    return config

}, Promise.reject)

axiosInstance.interceptors.response.use(response => {

    logger.log(`${ response.config.method } ${ response.config.url } response:`)
    logger.log(response)

    return response

}, Promise.reject)

export const login = (payload: object) =>
    axiosInstance.post('/login', payload)
        .then(response => response.data)
        .catch(showError)

export const logout = () =>
    axiosInstance.post('/logout')
        .then(response => response.data)
        .catch(showError)
