import { MutationTree } from 'vuex'
import { RootState } from '@/store/root/state'

export enum RootMutationTypes {
    INCREMENT_COUNTER = 'INCREMENT_COUNTER',
}

export type RootMutations<S = RootState> = {
    [RootMutationTypes.INCREMENT_COUNTER](state: S): void
}

export const mutations: MutationTree<RootState> & RootMutations = {
    [RootMutationTypes.INCREMENT_COUNTER](state) {
        state.count++
    },
}
