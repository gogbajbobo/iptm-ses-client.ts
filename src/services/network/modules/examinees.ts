import { examineesUrl } from '@/services/network/urls'
import { getRequest, putRequest } from '@/services/network/methods'
import { UserType } from '@/store/interfaces'

type ExamineeKey = 'examinee'

export const getExaminees = () => getRequest(examineesUrl)

export const updateExaminee = (id: number, examinee: Record<ExamineeKey, UserType>) => {
    return putRequest(examineesUrl, id, examinee)
}
