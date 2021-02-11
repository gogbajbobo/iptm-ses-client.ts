import { QuizType } from '@/store/interfaces'
import { StoreState } from './state'
import { Getters } from './types'

export type GetterTypes<T> = {
    [Getters.ITEM_LIST]: (state: StoreState) => T[] | null
}

export const getters: GetterTypes<QuizType> = {
    [Getters.ITEM_LIST]: state => state.itemList,
}
