import { StoreState } from './state'
import { MutationTypes } from './types'
import { UserType } from '@/store/interfaces'

export type Mutations = {
    [MutationTypes.SET_EXAMINEE_LIST]: (state: StoreState, examineeList: UserType[] | null) => void
}

export const mutations: Mutations = {

    [MutationTypes.SET_EXAMINEE_LIST](state, examineeList) {
        state.examineeList = examineeList
    },

}
