import { ElMessage, ElMessageBox } from 'element-plus'
import { logger } from '@/services/logger'

export const showError = (err: Error) =>  {

    ElMessage.error(`${ err.name }: ${ err.message }`)
    logger.error(err.message)

}

export const showPromptWithValue = (message: string, title: string, inputValue?: string): Promise<any> => {
    return ElMessageBox.prompt(message, title, { inputValue })
}

export const showPrompt = (message: string, title: string): Promise<any> => {
    return showPromptWithValue(message, title)
}

export const showWarningConfirm = (message: string, title: string): Promise<any> => {
    return ElMessageBox.confirm(message, title, { type: 'warning' })
}

export const showConfirm = (message: string, title: string): Promise<any> => {
    return ElMessageBox.confirm(message, title)
}
