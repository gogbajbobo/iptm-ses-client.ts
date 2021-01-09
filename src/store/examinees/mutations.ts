import { initialState, StoreState } from './state'
import { MutationTypes } from './types'
import { UserType } from '@/store/interfaces'

export type Mutations = {
    [MutationTypes.RESET]: (state: StoreState) => void
    [MutationTypes.SET_EXAMINEES]: (state: StoreState, examineeList: UserType[] | null) => void
    [MutationTypes.REPLACE_EXAMINEE]: (state: StoreState, examinee: UserType) => void
}

export const mutations: Mutations = {

    [MutationTypes.RESET]: state => { Object.assign(state, initialState()) },

    [MutationTypes.SET_EXAMINEES]: (state, examineeList) => {
        state.examineeList = examineeList
    },

    [MutationTypes.REPLACE_EXAMINEE]: (state, examinee) => {
        state.examineeList = state.examineeList?.map(ex => {
            return ex.id === examinee.id ? examinee : ex
        }) || null
    },

}
