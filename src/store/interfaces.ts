import { UserRole } from '@/services/constants'

export interface IRootState {
}

export type UserType = {
    id: string
    username: string
    accessToken?: string,
    roles: UserRole[]
}

export type CredentialsType = {
    username: string
    password: string
}
