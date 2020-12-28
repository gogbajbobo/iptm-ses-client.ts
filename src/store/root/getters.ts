import { GetterTree } from 'vuex'
import { RootState } from './state'

export type RootGetters = {
    counter(state: RootState): number
}

export const getters: GetterTree<RootState, RootState> & RootGetters = {
    counter: (state) => state.count,
}
