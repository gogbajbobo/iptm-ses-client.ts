import { StoreState } from './state'
import { GetterTypes } from './types'
import { UserType } from '@/store/interfaces'

export type Getters = {
    [GetterTypes.USER](state: StoreState): UserType | null
    [GetterTypes.ACCESS_TOKEN](state: StoreState): string | undefined
}

export const getters: Getters = {

    [GetterTypes.USER]: state => state.user,

    [GetterTypes.ACCESS_TOKEN]: state => state.user?.accessToken,

}
