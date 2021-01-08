import axiosInstance from '@/services/network'
import { rejectError } from '@/services/helper'

const request = (requestPromise: Promise<any>) =>
    requestPromise
        .then(response => response.data)
        .catch(rejectError)

export const get = (url: string) => request(axiosInstance.get(url))

export const post = (url: string, payload?: object) => request(axiosInstance.post(url, payload))

export const deleteRequest = (url: string, id: number) => request(axiosInstance.delete(`${ url }/${ id }`))
