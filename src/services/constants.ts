export enum UserRole {
    ADMIN = 'admin',
    EXAMINER = 'examiner',
    EXAMINEE = 'examinee',
}

export const isProduction = process.env.NODE_ENV === 'production'

export const tokenPrefix = 'Bearer '

export const baseURL = isProduction ? 'http://ses.iptm.ru/api' : 'http://localhost:8021'

export const NUMBER_OF_QUESTIONS = 10
