import { StoreState } from './state'

export type Getters = {
    counter(state: StoreState): number
}

export const getters: Getters = {
    counter: (state) => state.count,
}
