import { getRequest, postRequest, putRequest, deleteRequest } from '@/services/network/methods'
import { GetQueryParamsType } from '@/services/types'
import { isProduction } from '@/services/constants'

type ItemKey = 'item'

export type RequestCollection<T> = {
    getItems: (params?: GetQueryParamsType) => Promise<T[]>
    addItem: (item: Record<ItemKey, T>) => Promise<T>
    updateItem: (id: number, item: Record<ItemKey, T>) => Promise<T>
    deleteItem: (id: number) => Promise<string|number>
}

export const apiRequests = <T>(url: string): RequestCollection<T> => {

    return {

        getItems: (params?) => getRequest(url, params),
        addItem: (item) => postRequest(url, item),
        updateItem: (id, item) => putRequest(url, id, item),
        deleteItem: (id) => deleteRequest(url, id),

    }

}

export const sendAnswers = (url: string, answers: Record<number, number>) => postRequest(url, answers)

export const recreateExams = (url: string) =>
    isProduction
        ? Promise.reject(new Error('recreate exams is forbidden in production mode'))
        : getRequest(url)
