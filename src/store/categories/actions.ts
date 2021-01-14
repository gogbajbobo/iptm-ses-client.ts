import { ActionContext, ActionTree } from 'vuex'

import { IRootState, CategoryType } from '@/store/interfaces'
import { StoreState } from './state'
import { ActionTypes, MutationTypes } from './types'

import { categoriesUrl } from '@/services/network/urls'
import { apiRequests } from '@/services/network/modules'

const { getItems, addItem, updateItem, deleteItem } = apiRequests<CategoryType>(categoriesUrl)

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
        return getItems().then(items => commit(MutationTypes.SET_CATEGORIES, items))
    },

    [ActionTypes.ADD_CATEGORY]: ({ commit }, item) => {
        return addItem({ item }).then(item => commit(MutationTypes.ADD_CATEGORY, item))
    },

    [ActionTypes.UPDATE_CATEGORY]: ({ commit }, item) => {

        return updateItem(item.id, { item })
            .then(item => commit(MutationTypes.REPLACE_CATEGORY, item))

    },

    [ActionTypes.DELETE_CATEGORY]: ({ commit }, id) => {
        return deleteItem(id).then(() => commit(MutationTypes.DELETE_CATEGORY, id))
    },

}
