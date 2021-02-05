import { AnswerType } from '@/store/interfaces'

export type StoreState = {
    itemList: AnswerType[] | null
}

export const initialState = (): StoreState => ({
    itemList: null,
})

export const state: StoreState = initialState()
