import { examineesUrls } from '@/services/network/urls'
import { getRequest } from '@/services/network/methods'

export const getExaminees = () => getRequest(examineesUrls.getExaminees)
