import { getRequest, postRequest, putRequest, deleteRequest } from '@/services/network/methods'

type ItemKey = 'item'

export type RequestCollection<T> = {
    getItems: (params?: Record<string, string|number>) => Promise<T[]>
    addItem: (item: Record<ItemKey, T>) => Promise<T>
    updateItem: (id: number, item: Record<ItemKey, T>) => Promise<T>
    deleteItem: (id: number) => Promise<string|number>
}

export function apiRequests<T>(url: string): RequestCollection<T> {

    return {

        getItems: (params?) => getRequest(url, params),
        addItem: (item) => postRequest(url, item),
        updateItem: (id, item) => putRequest(url, id, item),
        deleteItem: (id) => deleteRequest(url, id),

    }

}
