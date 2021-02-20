import { store } from '@/store/index'
import * as authStore from '@/store/auth/types'
import * as categoryStore from '@/store/categories/types'
import * as sectionStore from '@/store/sections/types'
import * as examStore from '@/store/exams/types'
import * as questionStore from '@/store/questions/types'
import * as answerStore from '@/store/answers/types'
import * as examineeStore from '@/store/examinees/types'
import * as quizStore from '@/store/quizzes/types'
import { GetQueryParamsType } from '@/services/types'
import { isProduction } from '@/services/helper'
import { logger } from '@/services/logger'

import {
    UserType,
    ExamEmbryo, ExamType,
    CategoryType,
    SectionEmbryo, SectionType,
    QuestionType,
    AnswerEmbryo, AnswerType,
    QuizEmbryo, QuizType
} from '@/store/interfaces'

// AUTH
export const currentUser = ():UserType|null => store.getters[`auth/${ authStore.GetterTypes.USER }`]

// EXAMINEES
export const getExaminees = (params?:GetQueryParamsType):Promise<void> => {
    return store.dispatch(`examinees/${ examineeStore.ActionTypes.GET_EXAMINEES }`, params)
}
export const updateExaminee = (examinee: UserType): Promise<void> => {
    return store.dispatch(`examinees/${ examineeStore.ActionTypes.UPDATE_EXAMINEE }`, examinee)
}
export const examinees = ():UserType[] => store.getters[`examinees/${ examineeStore.GetterTypes.EXAMINEE_LIST }`]

// CATEGORIES
export const getCategories = ():Promise<void> => {
    return store.dispatch(`categories/${ categoryStore.ActionTypes.GET_CATEGORIES }`)
}
export const categories = ():CategoryType[] => store.getters[`categories/${ categoryStore.GetterTypes.CATEGORY_LIST }`]

// EXAMS
export const getExams = (params?: GetQueryParamsType): Promise<void> => {
    return store.dispatch(`exams/${ examStore.Actions.GET_ITEMS }`, params)
}
export const addExam = (exam: ExamEmbryo): Promise<void> => {
    return store.dispatch(`exams/${ examStore.Actions.ADD_ITEM }`, exam)
}
export const updateExam = (exam: ExamType): Promise<void> => {
    return store.dispatch(`exams/${ examStore.Actions.UPDATE_ITEM }`, exam)
}
export const deleteExam = (examId: number): Promise<void> => {
    return store.dispatch(`exams/${ examStore.Actions.DELETE_ITEM }`, examId)
}
export const recreateExams = ():Promise<void> => {

    isProduction && logger.error('this method should not be executed in production mode!')
    return store.dispatch(`exams/${ examStore.Actions.RECREATE_ITEMS }`)

}
export const exams = ():ExamType[] => store.getters[`exams/${ examStore.Getters.ITEM_LIST }`]

// SECTIONS
export const getSections = (params?:GetQueryParamsType):Promise<void> => {
    return store.dispatch(`sections/${ sectionStore.Actions.GET_ITEMS }`, params)
}
export const addSection = (section: SectionEmbryo):Promise<void> => {
    return store.dispatch(`sections/${ sectionStore.Actions.ADD_ITEM }`, section)
}
export const updateSection = (section: any):Promise<void> => {
    return store.dispatch(`sections/${ sectionStore.Actions.UPDATE_ITEM }`, section)
}
export const deleteSection = (sectionId: number):Promise<void> => {
    return store.dispatch(`sections/${ sectionStore.Actions.DELETE_ITEM }`, sectionId)
}
export const sections = ():SectionType[] => store.getters[`sections/${ sectionStore.Getters.ITEM_LIST }`]

// QUESTIONS
export const getQuestions = (params?:GetQueryParamsType):Promise<void> => {
    return store.dispatch(`questions/${ questionStore.Actions.GET_ITEMS }`, params)
}
export const deleteQuestion = (question: QuestionType):Promise<void> => {
    return store.dispatch(`questions/${ questionStore.Actions.DELETE_ITEM }`, question.id)
}
export const questions = ():QuestionType[] => store.getters[`questions/${ questionStore.Getters.ITEM_LIST }`]

// ANSWERS
export const getAnswers = (params?:GetQueryParamsType):Promise<void> => {
    return store.dispatch(`answers/${ answerStore.Actions.GET_ITEMS }`, params)
}
export const addAnswer = (answer: AnswerEmbryo):Promise<void> => {
    return store.dispatch(`answers/${ answerStore.Actions.ADD_ITEM }`, answer)
}
export const updateAnswer = (answer: AnswerType):Promise<void> => {
    return store.dispatch(`answers/${ answerStore.Actions.UPDATE_ITEM }`, answer)
}
export const deleteAnswer = (answerId: number):Promise<void> => {
    return store.dispatch(`answers/${ answerStore.Actions.DELETE_ITEM }`, answerId)
}
export const answers = ():AnswerType[] => store.getters[`answers/${ answerStore.Getters.ITEM_LIST }`]

// QUIZZES
export const getQuizzes = (params?:GetQueryParamsType):Promise<void> => {
    return store.dispatch(`quizzes/${ quizStore.Actions.GET_ITEMS }`, params)
}
export const addQuiz = (quiz: QuizEmbryo):Promise<void> => {
    return store.dispatch(`quizzes/${ quizStore.Actions.ADD_ITEM }`, quiz)
}
export const sendAnswers = (answers: Record<number, number>):Promise<Record<'numberOfIncorrectAnswers', number>> => {
    return store.dispatch(`quizzes/${ quizStore.Actions.SEND_ANSWERS }`, answers)
}
export const quizzes = ():QuizType[] => store.getters[`quizzes/${ quizStore.Getters.ITEM_LIST }`]
