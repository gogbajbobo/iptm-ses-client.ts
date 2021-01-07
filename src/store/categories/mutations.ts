import { initialState, StoreState } from './state'
import { MutationTypes } from './types'
import { CategoryType } from '@/store/interfaces'

export type Mutations = {
    [MutationTypes.RESET]: (state: StoreState) => void
    [MutationTypes.SET_CATEGORY_LIST]: (state: StoreState, categoryList: CategoryType[] | null) => void
}

export const mutations: Mutations = {

    [MutationTypes.RESET]: state => { Object.assign(state, initialState()) },

    [MutationTypes.SET_CATEGORY_LIST]: (state, categoryList) => {
        state.categoryList = categoryList
    },

}
