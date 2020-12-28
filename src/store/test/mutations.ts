import { StoreState } from './state'

export enum MutationTypes {
    INCREMENT_COUNTER = 'INCREMENT_COUNTER'
}

export type Mutations = {
    [MutationTypes.INCREMENT_COUNTER](state: StoreState): void
}

export const mutations: Mutations = {
    [MutationTypes.INCREMENT_COUNTER](state) {
        state.count++
    },
}
