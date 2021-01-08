import { ActionContext, ActionTree } from 'vuex'

import { IRootState, CategoryType } from '@/store/interfaces'
import { StoreState } from './state'
import { ActionTypes, MutationTypes } from './types'

import { getCategories, addCategory } from '@/services/network/modules/categories'

export interface IActions {
    [ActionTypes.GET_CATEGORIES]: (context: ActionContext<StoreState, IRootState>) => Promise<void>
    [ActionTypes.ADD_CATEGORY]: (context: ActionContext<StoreState, IRootState>, category: CategoryType) => Promise<void>
}

export const actions: ActionTree <StoreState, IRootState> & IActions = {

    [ActionTypes.GET_CATEGORIES]: ({ commit }) => {
        return getCategories().then(categories => commit(MutationTypes.SET_CATEGORY_LIST, categories))
    },

    [ActionTypes.ADD_CATEGORY]: ({ commit }, category) => {
        return addCategory({ category }).then(category => commit(MutationTypes.ADD_CATEGORY_TO_LIST, category))
    },

}
