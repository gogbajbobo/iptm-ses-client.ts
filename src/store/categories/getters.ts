import { StoreState } from './state'
import { GetterTypes } from './types'
import { CategoryType } from '@/store/interfaces'

export type Getters = {
    [GetterTypes.CATEGORY_LIST]: (state: StoreState) => CategoryType[] | null
}

export const getters: Getters = {
    [GetterTypes.CATEGORY_LIST]: state => state.categoryList,
}
