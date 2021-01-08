import { ActionContext, ActionTree } from 'vuex'

import { IRootState, CategoryType } from '@/store/interfaces'
import { StoreState } from './state'
import { ActionTypes, MutationTypes } from './types'

import { getCategories, addCategory, updateCategory, deleteCategory } from '@/services/network/modules/categories'

type Context = ActionContext<StoreState, IRootState>
type Actions = ActionTree <StoreState, IRootState>

export interface IActions {
    [ActionTypes.GET_CATEGORIES]: (context: Context) => Promise<void>
    [ActionTypes.ADD_CATEGORY]: (context: Context, category: CategoryType) => Promise<void>
    [ActionTypes.UPDATE_CATEGORY]: (context: Context, category: CategoryType) => Promise<void>
    [ActionTypes.DELETE_CATEGORY]: (context: Context, id: number) => Promise<void>
}

export const actions: Actions & IActions = {

    [ActionTypes.GET_CATEGORIES]: ({ commit }) => {
        return getCategories().then(categories => commit(MutationTypes.SET_CATEGORIES, categories))
    },

    [ActionTypes.ADD_CATEGORY]: ({ commit }, category) => {
        return addCategory({ category }).then(category => commit(MutationTypes.ADD_CATEGORY, category))
    },

    [ActionTypes.UPDATE_CATEGORY]: ({ commit }, category) => {

        return updateCategory(category.id, { category })
            .then(category => commit(MutationTypes.REPLACE_CATEGORY, category))

    },

    [ActionTypes.DELETE_CATEGORY]: ({ commit }, categoryId) => {
        return deleteCategory(categoryId).then(() => commit(MutationTypes.DELETE_CATEGORY, categoryId))
    }

}
