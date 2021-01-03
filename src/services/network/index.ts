import axios from 'axios'
import { logger } from '@/services/logger'
import { authUrls } from '@/services/network/urls'

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

}, error => {

    if (error.response) {

        const isLoginUrl = error.response.config.url.slice(-authUrls.login.length) === authUrls.login

        if (error.response.status === 401 && !isLoginUrl) {
            return Promise.resolve({ data: { response: 401 } }) // do not show error box if 401
        }

    }

    const message = error.response && error.response.data && error.response.data.message
    return Promise.reject(message ? new Error(message) : error)

})

export default axiosInstance
