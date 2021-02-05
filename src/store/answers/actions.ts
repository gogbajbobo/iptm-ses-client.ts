import { ActionContext, ActionTree } from 'vuex'

import { IRootState, AnswerType } from '@/store/interfaces'
import { StoreState } from './state'
import { Actions, Mutations } from './types'

import { answersUrl } from '@/services/network/urls'
import { apiRequests } from '@/services/network/modules'

const { getItems, addItem, updateItem, deleteItem } = apiRequests<AnswerType>(answersUrl)

type Context = ActionContext<StoreState, IRootState>
type ActionsType = ActionTree <StoreState, IRootState>

export interface IActions<T> {
    [Actions.GET_ITEMS]: (context: Context, params: Record<string, string|number>) => Promise<void>
    [Actions.ADD_ITEM]: (context: Context, item: T) => Promise<void>
    [Actions.UPDATE_ITEM]: (context: Context, item: T) => Promise<void>
    [Actions.DELETE_ITEM]: (context: Context, id: number) => Promise<void>
}

export const actions: ActionsType & IActions<AnswerType> = {

    [Actions.GET_ITEMS]: ({ commit }, params) => {
        return getItems(params).then(items => commit(Mutations.SET_ITEMS, items))
    },

    [Actions.ADD_ITEM]: ({ commit }, item) => {
        return addItem({ item }).then(item => commit(Mutations.ADD_ITEM, item))
    },

    [Actions.UPDATE_ITEM]: ({ commit }, item) => {

        return updateItem(item.id, { item })
            .then(item => commit(Mutations.REPLACE_ITEM, item))

    },

    [Actions.DELETE_ITEM]: ({ commit }, id) => {
        return deleteItem(id).then(() => commit(Mutations.DELETE_ITEM, id))
    },

}
