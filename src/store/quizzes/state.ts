import { QuizType } from '@/store/interfaces'

export type StoreState = {
    itemList: QuizType[] | null
}

export const initialState = (): StoreState => ({
    itemList: null,
})

export const state: StoreState = initialState()
