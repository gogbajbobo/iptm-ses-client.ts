import components from '@/components'
import { paths } from '@/router/paths'
import { RouteRecordRaw } from 'vue-router'

const { Login, Main } = components

const root: RouteRecordRaw = {
    path: paths.ROOT,
    redirect: paths.MAIN,
}

const main: RouteRecordRaw = {
    path: paths.MAIN,
    name: Main.name,
    component: Main,
}

const login: RouteRecordRaw = {
    path: paths.LOGIN,
    name: Login.name,
    component: Login,
    meta: {
        anonymousAccess: true,
    }
}

export const routes: RouteRecordRaw[] = [
    root,
    main,
    login,
]
