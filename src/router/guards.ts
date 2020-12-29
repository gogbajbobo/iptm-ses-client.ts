import { logger } from '@/services/logger'
import { Router } from 'vue-router'

export const guardsInit = (router: Router) => {

    router.beforeEach((to, from) => {
        return true
    })

    router.afterEach((to, from, failure) => {

    })

}
