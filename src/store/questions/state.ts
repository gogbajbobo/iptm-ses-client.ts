import { QuestionType } from '@/store/interfaces'

export type StoreState = {
    itemList: QuestionType[] | null
}

export const initialState = (): StoreState => ({
    itemList: null,
})

export const state: StoreState = initialState()
