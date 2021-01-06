import { ActionContext, ActionTree } from 'vuex'

import { IRootState } from '@/store/interfaces'
import { StoreState } from './state'
import { ActionTypes, MutationTypes } from './types'

import { getExaminees } from '@/services/network/examinees'

export interface IActions {
    [ActionTypes.GET_CATEGORIES]: (context: ActionContext<StoreState, IRootState>) => Promise<any>
}

export const actions: ActionTree <StoreState, IRootState> & IActions = {

    [ActionTypes.GET_CATEGORIES]: ({ commit }) => {
        return getExaminees().then(data => commit(MutationTypes.SET_CATEGORY_LIST, data))
    },

}
