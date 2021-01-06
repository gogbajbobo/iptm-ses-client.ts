import { ActionContext, ActionTree } from 'vuex'

import { IRootState } from '@/store/interfaces'
import { StoreState } from './state'
import { ActionTypes, MutationTypes } from './types'

export interface IActions {
    [ActionTypes.GET_EXAMINEES]: (context: ActionContext<StoreState, IRootState>) => Promise<any>
}

export const actions: ActionTree <StoreState, IRootState> & IActions = {

    [ActionTypes.GET_EXAMINEES]: ({ commit }) => {
        return Promise.resolve(() => commit(MutationTypes.SET_EXAMINEE_LIST, null))
    },

}
