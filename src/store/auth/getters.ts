import { StoreState } from './state'
import { GetterTypes, UserType } from './types'

export type Getters = {
    [GetterTypes.USER](state: StoreState): UserType | null
    [GetterTypes.ACCESS_TOKEN](state: StoreState): string | null
}

export const getters: Getters = {

    [GetterTypes.USER]: state => state.user,

    [GetterTypes.ACCESS_TOKEN]: state => state.accessToken,

}
