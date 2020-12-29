import { StoreState } from './state'
import { MutationTypes } from './types'

export type Mutations = {
    [MutationTypes.INCREMENT_COUNTER](state: StoreState): void
    [MutationTypes.DECREMENT_COUNTER](state: StoreState): void
}

export const mutations: Mutations = {
    [MutationTypes.INCREMENT_COUNTER](state) {
        state.count++
    },
    [MutationTypes.DECREMENT_COUNTER](state) {
        state.count--
    },
}
