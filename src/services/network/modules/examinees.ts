import { examineesUrls } from '@/services/network/urls'
import { get } from '@/services/network/methods'

export const getExaminees = () => get(examineesUrls.getExaminees)
