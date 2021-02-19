<script lang='ts'>

    // TODO: have to check are questions from quiz request
    import { defineComponent, reactive } from 'vue'
    import { questions } from '@/store/helper'

    const localname = 'Вопросы экзамена'

    export default defineComponent({

        name: 'QuizQuestionList',
        localname,

        setup() {

            const quizQuestions = questions()
            const answers = reactive({})

            return {
                localname,
                quizQuestions,
                answers,
            }

        },

        methods: {

        },

    })

</script>

<template>

    <div>

        <div>{{ localname }}</div>

        <el-table :data='quizQuestions' :default-expand-all='true'>

            <el-table-column type="index" fixed width="50">
            </el-table-column>

            <el-table-column prop="id" fixed label="#" width="50">
            </el-table-column>

            <el-table-column prop="text" label="Вопрос">
            </el-table-column>

            <el-table-column type="expand">
                <template #default="props">

                    <div>Ответы:</div>

                    <el-radio-group v-model='answers[props.row.id]'>

                        <el-radio v-for='answer in props.row.answers'
                                  :key='answer.id'
                                  :label='answer.id'
                                  class='answer-text'>

                            {{ answer.text }}

                        </el-radio>

                    </el-radio-group>

                </template>
            </el-table-column>

        </el-table>

    </div>

</template>

<style scoped>

    .answer-text {
        display: block;
        padding-top: 8px;
    }

</style>
