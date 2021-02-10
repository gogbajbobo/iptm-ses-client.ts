import { UserType, CategoryType, SectionType } from '@/store/interfaces'
import { store } from '@/store/index'
import * as authStore from '@/store/auth/types'
import * as categoryStore from '@/store/categories/types'
import * as sectionStore from '@/store/sections/types'

export const currentUser = ():UserType|null => store.getters[`auth/${ authStore.GetterTypes.USER }`]

export const categories = ():CategoryType[] => store.getters[`categories/${ categoryStore.GetterTypes.CATEGORY_LIST }`]

export const getSections = (params:Record<string, string|number>):Promise<void> => {
    return store.dispatch(`sections/${ sectionStore.Actions.GET_ITEMS }`, params)
}
export const sections = ():SectionType[] => store.getters[`sections/${ sectionStore.Getters.ITEM_LIST }`]
