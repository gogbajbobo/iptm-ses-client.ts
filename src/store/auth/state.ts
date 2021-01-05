import { UserType } from './types'

export type StoreState = {
    user: UserType | null
    accessToken: string | null
}

export const state: StoreState = {
    user: null,
    accessToken: null,
}
