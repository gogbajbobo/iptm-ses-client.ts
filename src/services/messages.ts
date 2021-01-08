import { ElMessage } from 'element-plus'
import { ElMessageBox } from 'element-plus/'
import { logger } from '@/services/logger'

export const showError = (err: Error) =>  {

    ElMessage.error(`${ err.name }: ${ err.message }`)
    logger.error(err.message)

}

export const showPrompt = (message: string, title: string): Promise<any> => {
    return ElMessageBox.prompt(message, title)
}

export const showConfirm = (message: string, title: string): Promise<any> => {
    return ElMessageBox.confirm(message, title)
}
