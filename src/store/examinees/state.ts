import { UserType } from '@/store/interfaces'

export type StoreState = {
    examineeList: UserType[] | null
}

export const initialState = (): StoreState => ({
    examineeList: null,
})

export const state: StoreState = initialState()
