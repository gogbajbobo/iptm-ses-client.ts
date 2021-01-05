import { state as initialState, StoreState } from './state'
import { MutationTypes } from './types'

export type Mutations = {
    [MutationTypes.LOGIN](state: StoreState, user: Record<string, any>): void
    [MutationTypes.LOGOUT](state: StoreState): void
}

export const mutations: Mutations = {

    [MutationTypes.LOGIN](state, data) {

        const { user, accessToken } = data
        state.user = user
        state.accessToken = accessToken

    },

    [MutationTypes.LOGOUT](state) {
        Object.assign(state, initialState)
    },

}
