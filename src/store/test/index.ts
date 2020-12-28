import { Module } from 'vuex'

import { StoreState, state } from './state'
import { mutations } from './mutations'
import { actions } from './actions'
import { getters } from './getters'
import { IRootState } from '@/store/interfaces'

export const test: Module <StoreState, IRootState> = {

    namespaced: true,
    state,
    mutations,
    actions,
    getters

}
