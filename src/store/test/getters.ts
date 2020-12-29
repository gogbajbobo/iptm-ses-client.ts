import { StoreState } from './state'
import { GetterTypes } from './types'

export type Getters = {
    [GetterTypes.COUNTER](state: StoreState): number
}

export const getters: Getters = {
    [GetterTypes.COUNTER]: (state) => state.count,
}
