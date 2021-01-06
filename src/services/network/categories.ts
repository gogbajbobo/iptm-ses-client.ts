import axiosInstance from '@/services/network/index'
import { rejectError } from '@/services/helper'
import { categoriesUrls } from '@/services/network/urls'

export const getCategories = () =>
    axiosInstance.get(categoriesUrls.getCategories)
        .then(response => response.data)
        .catch(rejectError)
