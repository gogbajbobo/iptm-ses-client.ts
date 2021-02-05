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
    category: number
}

export interface SectionType extends BaseType {
    title: string
    exam: number
    category: CategoryType
    questions?: any[]
}

export interface QuestionEmbryo {
    text: string
    sectionId: number
}

export interface QuestionType extends BaseType {
    text: string
    section: SectionType
    sectionId: number
}

export interface AnswerEmbryo {
    text: string
    questionId: number
}

export interface AnswerType extends BaseType {
    text: string
    isCorrect: boolean
    questionId: number
    question: QuestionType
}
