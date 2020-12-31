import { Router } from 'vue-router'
import { paths } from './paths'
import { isAuthorized } from '@/services/helper'


export const guardsInit = (router: Router) => {

    router.beforeEach((to, from) => {

        if (!isAuthorized() && !to.meta.anonymousAccess)
            return paths.LOGIN

        if (isAuthorized() && to.path === paths.LOGIN)
            return paths.ROOT

        return true

    })

    router.afterEach((to, from, failure) => {

    })

}
