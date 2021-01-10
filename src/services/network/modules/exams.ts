import { getRequest, postRequest, putRequest, deleteRequest } from '@/services/network/methods'

import { examsUrl } from '@/services/network/urls'
import { ExamType } from '@/store/interfaces'

export type ItemKey = 'item'

export const getItems = () => getRequest(examsUrl)

export const addItem = (item: Record<ItemKey, ExamType>) => postRequest(examsUrl, item)

export const updateItem = (id: number, item: Record<ItemKey, ExamType>) => {
    return putRequest(examsUrl, id, item)
}

export const deleteItem = (id: number) => deleteRequest(examsUrl, id)
