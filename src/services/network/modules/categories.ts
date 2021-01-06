import { categoriesUrls } from '@/services/network/urls'
import { get } from '@/services/network/methods'

export const getCategories = () => get(categoriesUrls.getCategories)
