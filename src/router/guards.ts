import { Router } from 'vue-router'
import { paths } from './paths'
import { isAuthenticated } from '@/services/helper'


export const guardsInit = (router: Router) => {

    router.beforeEach((to, from) => {

        if (!isAuthenticated() && !to.meta.anonymousAccess)
            return paths.LOGIN

        if (isAuthenticated() && to.path === paths.LOGIN)
            return paths.ROOT

        return true

    })

    router.afterEach((to, from, failure) => {

    })

}
