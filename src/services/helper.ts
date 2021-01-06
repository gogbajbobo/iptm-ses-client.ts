import { store } from '@/store'
import * as authStore from '@/store/auth/types'
import { UserType } from '@/store/interfaces'
import { UserRole } from '@/services/constants'

export const isProduction = process.env.NODE_ENV === 'production'

export const currentUser = ():UserType | null => store.getters[`auth/${ authStore.GetterTypes.USER }`]

export const isAuthenticated = () => !!currentUser()

export const isExaminer = () => currentUser()?.roles.includes(UserRole.EXAMINER)

export const isExaminee = () => currentUser()?.roles.includes(UserRole.EXAMINEE)

export const rejectError = (err: Error) => Promise.reject(err)
