import { StoreState } from './state'
import { MutationTypes } from './types'
import { CategoryType } from '@/store/interfaces'

export type Mutations = {
    [MutationTypes.SET_CATEGORY_LIST]: (state: StoreState, categoryList: CategoryType[] | null) => void
}

export const mutations: Mutations = {

    [MutationTypes.SET_CATEGORY_LIST](state, categoryList) {
        state.categoryList = categoryList
    },

}
