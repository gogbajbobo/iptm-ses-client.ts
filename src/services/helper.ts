import { store } from '@/store'
import * as authStore from '@/store/auth/types'

export const isProduction = process.env.NODE_ENV === 'production'

export const currentUser = () => store.getters[`auth/${ authStore.GetterTypes.USER }`]

export const isAuthenticated = () => !!currentUser()
