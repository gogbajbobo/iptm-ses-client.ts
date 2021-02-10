import { UserType, ExamType, CategoryType, SectionType, SectionEmbryo } from '@/store/interfaces'
import { store } from '@/store/index'
import * as authStore from '@/store/auth/types'
import * as categoryStore from '@/store/categories/types'
import * as sectionStore from '@/store/sections/types'
import * as examStore from '@/store/exams/types'

export const currentUser = ():UserType|null => store.getters[`auth/${ authStore.GetterTypes.USER }`]

export const getCategories = ():Promise<void> => {
    return store.dispatch(`categories/${ categoryStore.ActionTypes.GET_CATEGORIES }`)
}
export const categories = ():CategoryType[] => store.getters[`categories/${ categoryStore.GetterTypes.CATEGORY_LIST }`]

export const exams = ():ExamType[] => store.getters[`exams/${ examStore.Getters.ITEM_LIST }`]

export const getSections = (params:Record<string, string|number>):Promise<void> => {
    return store.dispatch(`sections/${ sectionStore.Actions.GET_ITEMS }`, params)
}
export const addSection = (section: SectionEmbryo):Promise<void> => {
    return store.dispatch(`sections/${ sectionStore.Actions.ADD_ITEM }`, section)
}
export const updateSection = (section: any):Promise<void> => {
    return store.dispatch(`sections/${ sectionStore.Actions.UPDATE_ITEM }`, section)
}
export const deleteSection = (sectionId: number):Promise<void> => {
    return store.dispatch(`sections/${ sectionStore.Actions.DELETE_ITEM }`, sectionId)
}
export const sections = ():SectionType[] => store.getters[`sections/${ sectionStore.Getters.ITEM_LIST }`]
