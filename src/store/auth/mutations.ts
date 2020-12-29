import { StoreState } from './state'
import { MutationTypes, UserType } from './types'

export type Mutations = {
    [MutationTypes.LOGIN](state: StoreState, user: UserType): void
    [MutationTypes.LOGOUT](state: StoreState): void
}

export const mutations: Mutations = {
    [MutationTypes.LOGIN](state, user) {
        state.user = user
    },
    [MutationTypes.LOGOUT](state) {
        state.user = null
    },
}
