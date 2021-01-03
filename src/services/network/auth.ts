import axiosInstance from '@/services/network/index'
import { showError } from '@/services/messages'
import { authUrls } from '@/services/network/urls'

export const login = (payload: object) =>
    axiosInstance.post(authUrls.login, payload)
        .then(response => response.data)
        .catch(showError)

export const logout = () =>
    axiosInstance.post(authUrls.logout)
        .then(response => response.data)
        .catch(showError)
