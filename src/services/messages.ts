import { ElMessage } from 'element-plus'
import { logger } from '@/services/logger'

export const showError = (err: Error) =>  {

    ElMessage.error(`${ err.name }: ${ err.message }`)
    logger.error(err.message)

}
