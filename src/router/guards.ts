import { Router, RouteLocationNormalized as RLN, NavigationGuardNext as NGN } from 'vue-router'
import { paths } from './paths'
import { isAuthenticated, checkRoles, currentUser } from '@/services/helper'

const checkRequiredRoles = (to: RLN): string | boolean => {

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
