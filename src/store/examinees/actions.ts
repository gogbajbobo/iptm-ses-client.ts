import { ActionContext, ActionTree } from 'vuex'

import { IRootState, UserType } from '@/store/interfaces'
import { StoreState } from './state'
import { ActionTypes, MutationTypes } from './types'

import { examineesUrl } from '@/services/network/urls'
import { apiRequests } from '@/services/network/modules'

const { getItems, updateItem } = apiRequests<UserType>(examineesUrl)

type Context = ActionContext<StoreState, IRootState>
type Actions = ActionTree <StoreState, IRootState>

export interface IActions {
    [ActionTypes.GET_EXAMINEES]: (context: Context, params: Record<string, string|number>) => Promise<any>
    [ActionTypes.UPDATE_EXAMINEE]: (context: Context, examinee: UserType) => Promise<any>
}

export const actions: Actions & IActions = {

    [ActionTypes.GET_EXAMINEES]: ({ commit }, params) => {
        return getItems(params).then(items => commit(MutationTypes.SET_EXAMINEES, items))
    },

    [ActionTypes.UPDATE_EXAMINEE]: ({ commit }, item) => {

        return updateItem(item.id, { item })
            .then(item => commit(MutationTypes.REPLACE_EXAMINEE, item))

    },

}
