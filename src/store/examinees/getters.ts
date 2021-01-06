import { StoreState } from './state'
import { GetterTypes } from './types'
import { UserType } from '@/store/interfaces'

export type Getters = {
    [GetterTypes.EXAMINEE_LIST]: (state: StoreState) => UserType[] | null
}

export const getters: Getters = {
    [GetterTypes.EXAMINEE_LIST]: state => state.examineeList,
}
