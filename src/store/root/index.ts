// used some code from https://dev.to/3vilarthas/vuex-typescript-m4j

import { createStore } from 'vuex'
import { state } from './state'
import { getters } from './getters'
import { mutations } from './mutations'
import { actions } from './actions'

export const rootStore = createStore({
    state,
    getters,
    mutations,
    actions,
})

