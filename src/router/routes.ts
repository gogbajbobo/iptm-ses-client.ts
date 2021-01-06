import components from '@/components'
import { paths } from '@/router/paths'
import { RouteRecordRaw } from 'vue-router'

const { Login, Main, ExamineeList, CategoryList } = components

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

const examineeList: RouteRecordRaw = {
    path: paths.EXAMINEE_LIST,
    name: ExamineeList.name,
    component: ExamineeList,
}

const categoryList: RouteRecordRaw = {
    path: paths.CATEGORY_LIST,
    name: CategoryList.name,
    component: CategoryList,
}

export const routes: RouteRecordRaw[] = [
    root,
    main,
    login,
    examineeList,
    categoryList,
]
