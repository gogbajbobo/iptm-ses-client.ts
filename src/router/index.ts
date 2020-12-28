import { createRouter, createWebHashHistory } from 'vue-router'

import { logger } from "@/services/logger"

import components from '@/components'
import { paths } from '@/router/paths'

const { Login, Main } = components

const root = {
    path: paths.ROOT,
    redirect: paths.MAIN,
}

const main = {
    path: paths.MAIN,
    name: Main.name,
    component: Main,
}

const login = {
    path: paths.LOGIN,
    name: Login.name,
    component: Login,
}

const routes = [
    root,
    main,
    login,
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.beforeEach((to, from) => {
    logger.log(to, from)
    return true
})

router.afterEach((to, from, failure) => {
    logger.log(router.currentRoute)
    logger.log(to, from, failure)
})
