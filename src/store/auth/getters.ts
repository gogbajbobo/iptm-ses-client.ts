import { StoreState } from './state'
import { GetterTypes, UserType } from './types'

export type Getters = {
    [GetterTypes.USER](state: StoreState): UserType | null
}

export const getters: Getters = {
    [GetterTypes.USER]: (state) => state.user,
}
