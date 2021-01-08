import { get } from '@/services/network/methods'
import { categoriesUrl } from '@/services/network/urls'

export const getCategories = () => get(categoriesUrl)
