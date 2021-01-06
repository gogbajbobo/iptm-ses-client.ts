import { UserType } from '@/store/interfaces'

export type StoreState = {
    user: UserType | null
}

export const state: StoreState = {
    user: null,
}
