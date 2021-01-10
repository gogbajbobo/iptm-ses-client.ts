import { UserRole } from '@/services/constants'

export interface IRootState {
}

export interface UserType {
    id: number
    username: string
    accessToken?: string
    roles: UserRole[]
    categories: CategoryType[]
}

export interface CredentialsType {
    username: string
    password: string
}

export interface CategoryType {
    id: number
    title: string
}

export interface ExamType {
    id: number
    title: string
    sections?: any[]
}
