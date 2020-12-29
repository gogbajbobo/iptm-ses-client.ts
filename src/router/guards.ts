import { Router } from 'vue-router'
import { store } from '@/store'
import { GetterTypes } from '@/store/auth/types'
import { paths } from './paths'

const isAuthorized = !!store.getters[`auth/${ GetterTypes.USER }`]

export const guardsInit = (router: Router) => {

    router.beforeEach((to, from) => {

        if (!isAuthorized && !to.meta.anonymousAccess)
            return paths.LOGIN

        if (isAuthorized && to.path === paths.LOGIN)
            return paths.ROOT

        return true

    })

    router.afterEach((to, from, failure) => {

    })

}
