import { createStore, createLogger } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import { test } from './test'
import { auth } from './auth'
import * as authStore from '@/store/auth/types'
import { router } from '@/router'
import { paths } from '@/router/paths'
import { showError } from '@/services/messages'

export const store = createStore({

    modules: {
        test,
        auth,
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
