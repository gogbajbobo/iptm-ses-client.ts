import { initialState, StoreState } from './state'
import { MutationTypes } from './types'
import { UserType } from '@/store/interfaces'

export type Mutations = {
    [MutationTypes.RESET]: (state: StoreState) => void
    [MutationTypes.SET_EXAMINEE_LIST]: (state: StoreState, examineeList: UserType[] | null) => void
}

export const mutations: Mutations = {

    [MutationTypes.RESET]: state => { Object.assign(state, initialState()) },

    [MutationTypes.SET_EXAMINEE_LIST]: (state, examineeList) => {
        state.examineeList = examineeList
    },

}
