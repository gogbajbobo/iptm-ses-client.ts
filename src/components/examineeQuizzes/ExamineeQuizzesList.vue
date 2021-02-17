<script lang='ts'>

    import { defineComponent, computed } from 'vue'
    import { getQuizzes, quizzes } from '@/store/helper'
    import { QuizType } from '@/store/interfaces'

    const localname = 'Список экзаменов'

    export default defineComponent({

        name: 'ExamineeQuizzesList',
        localname,

        setup() {

            getQuizzes().catch(() => {})

            return {
                localname,
                quizzes: computed(quizzes),
            }

        },

        methods: {

            trainingButtonPressed(quiz: QuizType) {
                console.log('training', quiz)
            },

            startQuizButtonPressed(quiz: QuizType) {
                console.log('start quiz', quiz)
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
