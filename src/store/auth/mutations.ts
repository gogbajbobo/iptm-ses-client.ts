import { initialState, StoreState } from './state'
import { MutationTypes } from './types'

export type Mutations = {
    [MutationTypes.RESET](state: StoreState): void
    [MutationTypes.LOGIN](state: StoreState, user: Record<string, any>): void
    [MutationTypes.LOGOUT](state: StoreState): void
}

export const mutations: Mutations = {

    [MutationTypes.RESET](state) { Object.assign(state, initialState()) },

    [MutationTypes.LOGIN](state, data) {

        const { user } = data
        state.user = user

    },

    [MutationTypes.LOGOUT](state) {
        Object.assign(state, initialState())
    },

}
