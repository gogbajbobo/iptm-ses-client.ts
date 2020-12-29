import { ActionContext, ActionTree } from 'vuex'

import { StoreState } from './state'
import { IRootState } from '@/store/interfaces'

import { ActionTypes, MutationTypes, CredentialsType } from './types'

export interface IActions {
    [ActionTypes.LOGIN](context: ActionContext<StoreState, IRootState>, credentials: CredentialsType): Promise<any>
    [ActionTypes.LOGOUT](context: ActionContext<StoreState, IRootState>): Promise<any>
}

export const actions: ActionTree <StoreState, IRootState> & IActions = {
    [ActionTypes.LOGIN]({ commit }, credentials) {
        return new Promise((resolve) => {
            setTimeout(() => {
                commit(MutationTypes.LOGIN)
                resolve('ok')
            }, 1000)
        })
    },
    [ActionTypes.LOGOUT]({ commit }) {
        return new Promise( resolve => {
            commit(MutationTypes.LOGOUT)
            resolve('logout ok')
        })
    },
}
