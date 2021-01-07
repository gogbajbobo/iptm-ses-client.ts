import { CategoryType } from '@/store/interfaces'

export type StoreState = {
    categoryList: CategoryType[] | null
}

export const initialState = (): StoreState => ({
    categoryList: null,
})

export const state: StoreState = initialState()
