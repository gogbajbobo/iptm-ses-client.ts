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
    meta: {
        anonymousAccess: true,
    }
}

export const routes = [
    root,
    main,
    login,
]
