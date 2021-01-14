import { createStore, createLogger, Store } from 'vuex'
import createPersistedState from 'vuex-persistedstate'  // TODO: check if it needed with 'vuex-multi-tab-state'
// import createMultiTabState from 'vuex-multi-tab-state'  // TODO: this plugin prevent new module attaching to the store

import { IRootState } from '@/store/interfaces'

import { auth } from './auth'
import { examinees } from '@/store/examinees'
import { categories } from '@/store/categories'
import { store as exams } from '@/store/exams'
import { store as sections } from '@/store/sections'
import { store as questions } from '@/store/questions'

import * as authStore from '@/store/auth/types'

import { router } from '@/router'
import { paths } from '@/router/paths'
import { showError } from '@/services/messages'


export const store = createStore({

    modules: {
        auth,
        examinees,
        categories,
        exams,
        sections,
        questions,
    },

    strict: process.env.NODE_ENV !== 'production',

    plugins: [
        createLogger(),
        createPersistedState(),
        // createMultiTabState(),
    ],

})

export const resetStore = (store: Store<IRootState>) => {

    const modules = Object.keys(store.state)
    modules.forEach(module => store.commit(`${ module }/RESET`))

}

store.watch(
    (state, getters) => getters[`auth/${ authStore.GetterTypes.USER }`],
    user => {

        if (user)
            return router.push(paths.MAIN).catch(showError)

        resetStore(store)
        return router.push(paths.LOGIN).catch(showError)

    }
)
