import { logger } from '@/services/logger'
import { AnswerType } from '@/store/interfaces'
import { initialState, StoreState } from './state'
import { Mutations } from './types'

export type MutationsType<T> = {
    [Mutations.RESET]: (state: StoreState) => void
    [Mutations.SET_ITEMS]: (state: StoreState, itemList: T[] | null) => void
    [Mutations.ADD_ITEM]: (state: StoreState, item: T) => void
    [Mutations.REPLACE_ITEM]: (state: StoreState, item: T | T[]) => void
    [Mutations.DELETE_ITEM]: (state: StoreState, itemId: number) => void
}

export const mutations: MutationsType<AnswerType> = {

    [Mutations.RESET]: state => { Object.assign(state, initialState()) },

    [Mutations.SET_ITEMS]: (state, itemList) => { state.itemList = itemList },

    [Mutations.ADD_ITEM]: (state, item) => { state.itemList?.push(item) },

    [Mutations.REPLACE_ITEM]: (state, newItem) => {

        if (Array.isArray(newItem)) {

            const newItemIds = newItem.map(i => i.id)

            state.itemList = state.itemList?.map(item => {

                const newI = newItem.find(i => i.id === item.id)

                if (!newItemIds.includes(item.id))
                    return item

                if (newI)
                    return newI

                logger.warn('something wrong with answers REPLACE_ITEM mutation')
                return item

            }) || null

        } else {

            state.itemList = state.itemList?.map(item => {
                return item.id === newItem.id ? newItem : item
            }) || null

        }

    },

    [Mutations.DELETE_ITEM]: (state, itemId) => {
        state.itemList = state.itemList?.filter(item => item.id !== itemId) || null
    },

}
