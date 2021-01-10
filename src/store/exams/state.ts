import { ExamType } from '@/store/interfaces'

export type StoreState = {
    itemList: ExamType[] | null
}

export const initialState = (): StoreState => ({
    itemList: null,
})

export const state: StoreState = initialState()
