import { ElLoading } from 'element-plus'
import axiosInstance from '@/services/network'
import { rejectError } from '@/services/helper'

const request = (requestPromise: Promise<any>) => {

    const loadingInstance = ElLoading.service({ fullscreen: true })

    return requestPromise
        .then(response => response.data)
        .catch(rejectError)
        .finally(() => loadingInstance.close())

}

export const getRequest = (url: string) => request(axiosInstance.get(url))

export const postRequest = (url: string, payload?: object) => request(axiosInstance.post(url, payload))

export const putRequest = (url: string, id: number, payload: object) => {
    return request(axiosInstance.put(`${ url }/${ id }`, payload))
}

export const deleteRequest = (url: string, id: number) => request(axiosInstance.delete(`${ url }/${ id }`))
