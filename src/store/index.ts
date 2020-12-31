import { createStore, createLogger } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import { test } from './test'
import { auth } from './auth'

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
