import { UserType } from '@/store/interfaces'

export type StoreState = {
    examineeList: UserType[] | null
}

export const state: StoreState = {
    examineeList: null,
}
