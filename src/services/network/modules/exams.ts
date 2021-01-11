import { examsUrl as url } from '@/services/network/urls'
import { ExamType as ItemType } from '@/store/interfaces'

import { getRequest, postRequest, putRequest, deleteRequest } from '@/services/network/methods'

export type ItemKey = 'item'

export const getItems = () => getRequest(url)

export const addItem = (item: Record<ItemKey, ItemType>) => postRequest(url, item)

export const updateItem = (id: number, item: Record<ItemKey, ItemType>) => {
    return putRequest(url, id, item)
}

export const deleteItem = (id: number) => deleteRequest(url, id)
