import { ActionContext, ActionTree } from 'vuex'

import { StoreState } from './state'
import { IRootState } from '@/store/interfaces'

import { ActionTypes, MutationTypes } from './types'

export interface IActions {
    [ActionTypes.INCREMENT_COUNTER](context: ActionContext<StoreState, IRootState>): Promise<any>
}

export const actions: ActionTree <StoreState, IRootState> & IActions = {
    [ActionTypes.INCREMENT_COUNTER]({ commit }) {
        return new Promise((resolve) => {
            setTimeout(() => {
                commit(MutationTypes.INCREMENT_COUNTER)
                resolve('ok')
            }, 500)
        })
    },
}
