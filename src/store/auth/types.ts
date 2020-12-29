export enum ActionTypes {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
}

export enum GetterTypes {
    USER = 'USER',
}

export enum MutationTypes {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
}

export type UserType = {
    id: string
    name: string
    accessToken: string
}

export type CredentialsType = {
    login: string
    password: string
}
