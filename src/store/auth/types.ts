import { UserRole } from '@/services/constants'

export enum ActionTypes {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
}

export enum GetterTypes {
    USER = 'USER',
    ACCESS_TOKEN = 'ACCESS_TOKEN'
}

export enum MutationTypes {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
}

export type UserType = {
    id: string
    username: string
    accessToken: string,
    roles: UserRole[]
}

export type CredentialsType = {
    username: string
    password: string
}
