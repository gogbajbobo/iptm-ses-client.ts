import { store } from '@/store/index'
import * as authStore from '@/store/auth/types'
import * as categoryStore from '@/store/categories/types'
import * as sectionStore from '@/store/sections/types'
import * as examStore from '@/store/exams/types'
import * as questionStore from '@/store/questions/types'
import * as examineeStore from '@/store/examinees/types'
import * as quizStore from '@/store/quizzes/types'

import {
    UserType, ExamType, CategoryType, SectionType, QuestionType, SectionEmbryo, QuizEmbryo, QuizType
} from '@/store/interfaces'

// AUTH
export const currentUser = ():UserType|null => store.getters[`auth/${ authStore.GetterTypes.USER }`]

// EXAMINEES
export const getExaminees = (params?:Record<string, string|number>):Promise<void> => {
    return store.dispatch(`examinees/${ examineeStore.ActionTypes.GET_EXAMINEES }`, params)
}
export const examinees = ():UserType[] => store.getters[`examinees/${ examineeStore.GetterTypes.EXAMINEE_LIST }`]

// CATEGORIES
export const getCategories = ():Promise<void> => {
    return store.dispatch(`categories/${ categoryStore.ActionTypes.GET_CATEGORIES }`)
}
export const categories = ():CategoryType[] => store.getters[`categories/${ categoryStore.GetterTypes.CATEGORY_LIST }`]

// EXAMS
export const exams = ():ExamType[] => store.getters[`exams/${ examStore.Getters.ITEM_LIST }`]

// SECTIONS
export const getSections = (params?:Record<string, string|number>):Promise<void> => {
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
export const getQuestions = (params?:Record<string, string|number>):Promise<void> => {
    return store.dispatch(`questions/${ questionStore.Actions.GET_ITEMS }`, params)
}
export const deleteQuestion = (question: QuestionType):Promise<void> => {
    return store.dispatch(`questions/${ questionStore.Actions.DELETE_ITEM }`, question.id)
}
export const questions = ():QuestionType[] => store.getters[`questions/${ questionStore.Getters.ITEM_LIST }`]

// QUIZZES
export const getQuizzes = (params?:Record<string, string|number>):Promise<void> => {
    return store.dispatch(`quizzes/${ quizStore.Actions.GET_ITEMS }`, params)
}
export const addQuiz = (quiz: QuizEmbryo):Promise<void> => {
    return store.dispatch(`quizzes/${ quizStore.Actions.ADD_ITEM }`, quiz)
}
export const quizzes = ():QuizType[] => store.getters[`quizzes/${ quizStore.Getters.ITEM_LIST }`]
