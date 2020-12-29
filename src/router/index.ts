import { createRouter, createWebHashHistory } from 'vue-router'

import { routes } from './routes'
import { guardsInit } from '@/router/guards'

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

guardsInit(router)
