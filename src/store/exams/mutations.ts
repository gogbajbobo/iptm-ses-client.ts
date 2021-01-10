import { ExamType } from '@/store/interfaces'
import { initialState, StoreState } from './state'
import { Mutations } from './types'

export type MutationsType<T> = {
    [Mutations.RESET]: (state: StoreState) => void
    [Mutations.SET_ITEMS]: (state: StoreState, itemList: T[] | null) => void
    [Mutations.ADD_ITEM]: (state: StoreState, item: T) => void
    [Mutations.REPLACE_ITEM]: (state: StoreState, item: T) => void
    [Mutations.DELETE_ITEM]: (state: StoreState, itemId: number) => void
}

export const mutations: MutationsType<ExamType> = {

    [Mutations.RESET]: state => { Object.assign(state, initialState()) },

    [Mutations.SET_ITEMS]: (state, itemList) => { state.itemList = itemList },

    [Mutations.ADD_ITEM]: (state, item) => { state.itemList?.push(item) },

    [Mutations.REPLACE_ITEM]: (state, newItem) => {
        state.itemList = state.itemList?.map(item => {
            return item.id === newItem.id ? newItem : item
        }) || null
    },

    [Mutations.DELETE_ITEM]: (state, itemId) => {
        state.itemList = state.itemList?.filter(item => item.id !== itemId) || null
    },

}
