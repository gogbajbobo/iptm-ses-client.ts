<script lang='ts'>

    import { defineComponent, computed } from 'vue'
    import { getQuizzes, quizzes, getQuestions, questions } from '@/store/helper'
    import { QuizType } from '@/store/interfaces'
    import { paths } from '@/router/paths'
    import { logger } from '@/services/logger'

    const localname = 'Список экзаменов'

    export default defineComponent({

        name: 'ExamineeQuizzesList',
        localname,

        setup() {

            getQuizzes().catch(() => {})

            return {
                localname,
                quizzes: computed(quizzes),
                questions: computed(questions),
            }

        },

        methods: {

            trainingButtonPressed(quiz: QuizType) {

                getQuestions({ quiz: quiz.id })
                    .then(() => this.$router.push(paths.QUIZ_QUESTIONS))
                    .catch(() => {})

            },

            startQuizButtonPressed(quiz: QuizType) {
                logger.info('start quiz', quiz)
            },

        },

    })

</script>

<template>

    <div>

        <div>{{ localname }}</div>

        <el-table :data='quizzes'>

            <el-table-column type="index" fixed width="50">
            </el-table-column>

            <el-table-column prop="id" fixed label="#" width="50">
            </el-table-column>

            <el-table-column prop="exam.title" fixed label="Экзамен">
            </el-table-column>

            <el-table-column fixed='right' width='256'>
                <template #default="scope">

                    <el-button type='success'
                               @click='trainingButtonPressed(scope.row)'>Тренировка</el-button>

                    <el-button type='primary'
                               @click='startQuizButtonPressed(scope.row)'>Сдать экзамен</el-button>

                </template>
            </el-table-column>

        </el-table>

    </div>

</template>

<style scoped>

</style>
