import { UserRole } from '@/services/constants'

export interface IRootState {
}

interface BaseType {
    id: number
}

export interface UserType extends BaseType {
    username: string
    accessToken?: string
    roles: UserRole[]
    categories: CategoryType[]
}

export interface CredentialsType {
    username: string
    password: string
}

export interface CategoryType extends BaseType {
    title: string
}

export interface ExamType extends BaseType {
    title: string
    sections?: SectionType[]
}

export interface SectionEmbryo {
    title: string
    exam: number
    category: number & CategoryType
}

export interface SectionType extends SectionEmbryo, BaseType {
    questions?: any[]
}
