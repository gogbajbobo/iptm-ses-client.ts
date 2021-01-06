import { UserRole } from '@/services/constants'

export interface IRootState {
}

export interface UserType {
    id: string
    username: string
    accessToken?: string
    roles: UserRole[]
}

export interface CredentialsType {
    username: string
    password: string
}

export interface CategoryType {
    id: number
    title: string
}
