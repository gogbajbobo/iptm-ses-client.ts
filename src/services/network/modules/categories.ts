import { categoriesUrl } from '@/services/network/urls'
import { get, post, deleteRequest } from '@/services/network/methods'
import { CategoryType } from '@/store/interfaces'

type CategoryKey = 'category'

export const getCategories = () => get(categoriesUrl)
export const addCategory = (category: Record<CategoryKey, CategoryType>) => post(categoriesUrl, category)
export const deleteCategory = (id: number) => deleteRequest(categoriesUrl, id)
