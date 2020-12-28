import { StoreState } from './state'

export enum GetterTypes {
    COUNTER = 'COUNTER',
}

export type Getters = {
    [GetterTypes.COUNTER](state: StoreState): number
}

export const getters: Getters = {
    [GetterTypes.COUNTER]: (state) => state.count,
}
