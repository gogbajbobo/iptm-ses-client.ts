import { currentUser } from '@/store/helper'
import { UserRole } from '@/services/constants'

export const isProduction = process.env.NODE_ENV === 'production'

export const isAuthenticated = () => !!currentUser()

export const isExaminer = () => currentUser()?.roles.includes(UserRole.EXAMINER)

export const isExaminee = () => currentUser()?.roles.includes(UserRole.EXAMINEE)

export const rejectError = (err: Error) => Promise.reject(err)

export const checkRoles = (user: any, requireRoles: UserRole[]) => {
    return user?.roles.some((role: UserRole) => requireRoles ? requireRoles.includes(role) : true)
}
