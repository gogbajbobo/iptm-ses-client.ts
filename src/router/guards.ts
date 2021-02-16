import { Router, RouteLocationNormalized } from 'vue-router'
import { paths } from './paths'
import { isAuthenticated, checkRoles } from '@/services/helper'
import { currentUser } from '@/store/helper'

const checkRequiredRoles = (to: RouteLocationNormalized): string | boolean => {

    if (!to.meta.requireRoles) return true

    return checkRoles(currentUser(), to.meta.requireRoles)
        ? true
        : paths.MAIN

}

export const guardsInit = (router: Router) => {

    router.beforeEach((to) => {

        if (!isAuthenticated() && !to.meta.anonymousAccess)
            return paths.LOGIN

        if (isAuthenticated() && to.path === paths.LOGIN)
            return paths.ROOT

        if (isAuthenticated())
            return checkRequiredRoles(to)

    })

}
