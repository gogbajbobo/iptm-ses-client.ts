import { SectionType } from '@/store/interfaces'

export type StoreState = {
    itemList: SectionType[] | null
}

export const initialState = (): StoreState => ({
    itemList: null,
})

export const state: StoreState = initialState()
