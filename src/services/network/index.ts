import axios, { AxiosRequestConfig } from 'axios'
import { logger } from '@/services/logger'
import { authUrls } from '@/services/network/urls'
import { store, resetStore } from '@/store'
import { GetterTypes } from '@/store/auth/types'
import { tokenPrefix, baseURL } from '@/services/constants'
import { router } from '@/router'
import { paths } from '@/router/paths'

const axiosInstance = axios.create({ baseURL })

const authorizedConfig = (config: AxiosRequestConfig) => {

    const accessToken = store.getters[`auth/${ GetterTypes.ACCESS_TOKEN }`]
    if (accessToken) config.headers.Authorization = `${ tokenPrefix }${ accessToken }`

    return config

}

axiosInstance.interceptors.request.use(config => {

    const { method, url } = config
    logger.log(`send request ${ method }, ${ url }`)

    if (url === authUrls.login)
        return config

    return authorizedConfig(config)

}, Promise.reject)

axiosInstance.interceptors.response.use(response => {

    logger.log(`${ response.config.method } ${ response.config.url } response:`)
    logger.log(response)

    return response

}, error => {

    const { response } = error

    if (response) {

        if (error.response.status === 401) {
            resetStore(store)
        }

        if (response.status === 403) {
            router.push({ path: paths.MAIN }).catch(() => {})
        }

        if (response.data.error)
            logger.error(response.data.error)

    }

    return Promise.reject(error)

})

export default axiosInstance
