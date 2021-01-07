import { UserType } from '@/store/interfaces'

export type StoreState = {
    user: UserType | null
}

export const initialState = (): StoreState => ({
    user: null,
})

export const state: StoreState = initialState()
