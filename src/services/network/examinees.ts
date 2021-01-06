import axiosInstance from '@/services/network/index'
import { rejectError } from '@/services/helper'
import { examineesUrls } from '@/services/network/urls'

export const getExaminees = () =>
    axiosInstance.get(examineesUrls.getExaminees)
        .then(response => response.data)
        .catch(rejectError)
