import { currentUser } from '@/store/helper'
import { UserRole } from '@/services/constants'


export const isAuthenticated = () => !!currentUser()

export const isAdmin = () => currentUser()?.roles.includes(UserRole.ADMIN)

export const isExaminer = () => currentUser()?.roles.includes(UserRole.EXAMINER)

export const isExaminee = () => currentUser()?.roles.includes(UserRole.EXAMINEE)

export const rejectError = (err: Error) => Promise.reject(err)

export const checkRoles = (user: any, requireRoles: UserRole[]) => {
    return user?.roles.some((role: UserRole) => requireRoles ? requireRoles.includes(role) : true)
}
