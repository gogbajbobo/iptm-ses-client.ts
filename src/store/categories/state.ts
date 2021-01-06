import { CategoryType } from '@/store/interfaces'

export type StoreState = {
    categoryList: CategoryType[] | null
}

export const state: StoreState = {
    categoryList: null,
}
