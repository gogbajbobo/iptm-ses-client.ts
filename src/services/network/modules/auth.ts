import { authUrls } from '@/services/network/urls'
import { post } from '@/services/network/methods'

export const login = (payload: object) => post(authUrls.login, payload)

export const logout = () => post(authUrls.logout)
