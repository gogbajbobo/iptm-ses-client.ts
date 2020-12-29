import { ActionContext, ActionTree } from 'vuex'

import { IRootState } from '@/store/interfaces'
import { StoreState } from './state'
import { ActionTypes, MutationTypes, CredentialsType } from './types'

import { login } from '@/services/network'

export interface IActions {
    [ActionTypes.LOGIN](context: ActionContext<StoreState, IRootState>, credentials: CredentialsType): Promise<any>
    [ActionTypes.LOGOUT](context: ActionContext<StoreState, IRootState>): Promise<any>
}

export const actions: ActionTree <StoreState, IRootState> & IActions = {

    [ActionTypes.LOGIN]: ({ commit }, credentials) => {

        return login(credentials)
            .then(response => console.log(response))

    },

    [ActionTypes.LOGOUT]({ commit }) {
        return new Promise( resolve => {
            commit(MutationTypes.LOGOUT)
            resolve('logout ok')
        })
    },

}
