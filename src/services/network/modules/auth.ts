import axiosInstance from '@/services/network'
import { rejectError } from '@/services/helper'
import { authUrls } from '@/services/network/urls'

export const login = (payload: object) =>
    axiosInstance.post(authUrls.login, payload)
        .then(response => response.data)
        .catch(rejectError)

export const logout = () =>
    axiosInstance.post(authUrls.logout)
        .then(response => response.data)
        .catch(rejectError)
