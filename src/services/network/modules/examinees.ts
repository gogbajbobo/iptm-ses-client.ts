import { getRequest } from '@/services/network/methods'
import { examineesUrl } from '@/services/network/urls'

export const getExaminees = () => getRequest(examineesUrl)
