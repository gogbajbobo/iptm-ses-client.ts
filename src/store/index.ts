import { createStore } from 'vuex'

import { test } from './test'
import { auth } from './auth'

export const store = createStore({

    modules: {
        test,
        auth,
    },

    strict: process.env.NODE_ENV !== 'production',

})
