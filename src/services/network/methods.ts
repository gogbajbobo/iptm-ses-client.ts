import axiosInstance from '@/services/network'
import { rejectError } from '@/services/helper'

export const get = (url: string) =>
    axiosInstance.get(url)
        .then(response => response.data)
        .catch(rejectError)

export const post = (url: string, payload?: object) =>
    axiosInstance.post(url, payload)
        .then(response => response.data)
        .catch(rejectError)
