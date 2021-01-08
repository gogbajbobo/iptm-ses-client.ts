import { categoriesUrl } from '@/services/network/urls'
import { get, post } from '@/services/network/methods'
import { CategoryType } from '@/store/interfaces'

export const getCategories = () => get(categoriesUrl)
export const addCategory = (category: CategoryType) => post(categoriesUrl, category)
