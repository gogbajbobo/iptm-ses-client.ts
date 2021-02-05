import { Module } from 'vuex'

import { state, StoreState } from './state'
import { mutations } from './mutations'
import { actions } from './actions'
import { getters } from './getters'
import { IRootState } from '@/store/interfaces'

export const store: Module <StoreState, IRootState> = {

    namespaced: true,
    state,
    mutations,
    actions,
    getters

}
