import { createStore, createLogger } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import { auth } from './auth'
import { examinees } from '@/store/examinees'
import * as authStore from '@/store/auth/types'
import { router } from '@/router'
import { paths } from '@/router/paths'
import { showError } from '@/services/messages'

export const store = createStore({

    modules: {
        auth,
        examinees,
    },

    strict: process.env.NODE_ENV !== 'production',

    plugins: [
        createLogger(),
        createPersistedState(),
    ],

})


store.watch(
    (state, getters) => getters[`auth/${ authStore.GetterTypes.USER }`],
    user => router.push(user ? paths.MAIN : paths.LOGIN).catch(showError)
)
