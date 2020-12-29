import { UserType } from './types'

export type StoreState = {
    user: UserType | null
}

export const state: StoreState = {
    user: null
}
