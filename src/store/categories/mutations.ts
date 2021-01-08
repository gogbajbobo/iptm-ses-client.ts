import { initialState, StoreState } from './state'
import { MutationTypes } from './types'
import { CategoryType } from '@/store/interfaces'

export type Mutations = {
    [MutationTypes.RESET]: (state: StoreState) => void
    [MutationTypes.SET_CATEGORY_LIST]: (state: StoreState, categoryList: CategoryType[] | null) => void
    [MutationTypes.ADD_CATEGORY_TO_LIST]: (state: StoreState, category: CategoryType) => void
    [MutationTypes.DELETE_CATEGORY]: (state: StoreState, categoryId: number) => void
}

export const mutations: Mutations = {

    [MutationTypes.RESET]: state => { Object.assign(state, initialState()) },

    [MutationTypes.SET_CATEGORY_LIST]: (state, categoryList) => {
        state.categoryList = categoryList
    },

    [MutationTypes.ADD_CATEGORY_TO_LIST]: (state, category) => {
        state.categoryList?.push(category)
    },

    [MutationTypes.DELETE_CATEGORY]: (state, categoryId) => {
        state.categoryList = state.categoryList?.filter(category => category.id !== categoryId) || null
    },

}
