import { createStore, createLogger } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import createMultiTabState from 'vuex-multi-tab-state'

import { auth } from './auth'
import { examinees } from '@/store/examinees'
import { categories } from '@/store/categories'
import * as authStore from '@/store/auth/types'
import { router } from '@/router'
import { paths } from '@/router/paths'
import { showError } from '@/services/messages'

export const store = createStore({

    modules: {
        auth,
        examinees,
        categories,
    },

    strict: process.env.NODE_ENV !== 'production',

    plugins: [
        createLogger(),
        createPersistedState(),
        createMultiTabState(),
    ],

})


store.watch(
    (state, getters) => getters[`auth/${ authStore.GetterTypes.USER }`],
    user => router.push(user ? paths.MAIN : paths.LOGIN).catch(showError)
)
