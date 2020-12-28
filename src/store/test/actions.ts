import { ActionContext, ActionTree } from 'vuex'

import { StoreState } from './state'
import { MutationTypes } from './mutations'
import { IRootState } from '@/store/interfaces'

export enum ActionTypes {
    INCREMENT_COUNTER = 'INCREMENT_COUNTER'
}

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
