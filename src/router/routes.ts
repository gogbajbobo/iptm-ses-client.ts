import components from '@/components'
import { paths } from '@/router/paths'
import { RouteRecordRaw } from 'vue-router'
import { UserRole } from '@/services/constants'

const {
    Login,
    Main,
    ExamineeList,
    CategoryList,
    ExamList,
    Exam,
    Section,
    Question,
    QuizList,
} = components

const root: RouteRecordRaw = {
    path: paths.ROOT,
    redirect: paths.MAIN,
}

const main: RouteRecordRaw = {
    path: paths.MAIN,
    name: Main.name,
    component: Main,
}

const login: RouteRecordRaw = {
    path: paths.LOGIN,
    name: Login.name,
    component: Login,
    meta: {
        anonymousAccess: true,
    }
}

const examineeList: RouteRecordRaw = {
    path: paths.EXAMINEE_LIST,
    name: ExamineeList.name,
    component: ExamineeList,
    meta: {
        requireRoles: [ UserRole.EXAMINER ],
    },
}

const categoryList: RouteRecordRaw = {
    path: paths.CATEGORY_LIST,
    name: CategoryList.name,
    component: CategoryList,
    meta: {
        requireRoles: [ UserRole.EXAMINER ],
    },
}

const examList: RouteRecordRaw = {
    path: paths.EXAM_LIST,
    name: ExamList.name,
    component: ExamList,
    meta: {
        requireRoles: [ UserRole.EXAMINER ],
    },
}

const examItem: RouteRecordRaw = {
    path: paths.EXAM_ITEM,
    name: Exam.name,
    component: Exam,
    props: true,
    meta: {
        requireRoles: [ UserRole.EXAMINER ],
    },
}

const sectionItem: RouteRecordRaw = {
    path: paths.SECTION_ITEM,
    name: Section.name,
    component: Section,
    props: true,
    meta: {
        requireRoles: [ UserRole.EXAMINER ],
    },
}

const questionItem: RouteRecordRaw = {
    path: paths.QUESTION_ITEM,
    name: Question.name,
    component: Question,
    props: true,
    meta: {
        requireRoles: [ UserRole.EXAMINER ],
    },
}

const quizList: RouteRecordRaw = {
    path: paths.QUIZ_LIST,
    name: QuizList.name,
    component: QuizList,
    meta: {
        requireRoles: [ UserRole.EXAMINER ],
    },
}

export const routes: RouteRecordRaw[] = [
    root,
    main,
    login,
    examineeList,
    categoryList,
    examList,
    examItem,
    sectionItem,
    questionItem,
    quizList,
]
