import { categoriesUrl } from '@/services/network/urls'
import { getRequest, postRequest, deleteRequest } from '@/services/network/methods'
import { CategoryType } from '@/store/interfaces'

type CategoryKey = 'category'

export const getCategories = () => getRequest(categoriesUrl)
export const addCategory = (category: Record<CategoryKey, CategoryType>) => postRequest(categoriesUrl, category)
export const deleteCategory = (id: number) => deleteRequest(categoriesUrl, id)
