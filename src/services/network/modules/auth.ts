import { authUrls } from '@/services/network/urls'
import { postRequest } from '@/services/network/methods'

export const login = (payload: object) => postRequest(authUrls.login, payload)

export const logout = () => postRequest(authUrls.logout)
