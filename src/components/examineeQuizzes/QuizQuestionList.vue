<script lang='ts'>

    // TODO: have to check are questions from quiz request
    import { defineComponent, reactive, computed } from 'vue'
    import { questions } from '@/store/helper'
    import { NUMBER_OF_QUESTIONS } from '@/services/constants'
    import { sendAnswers } from '@/store/helper'

    const localname = 'Вопросы экзамена'

    export default defineComponent({

        name: 'QuizQuestionList',
        localname,

        setup() {

            const quizQuestions = questions()
            const answers = reactive({})
            // const sendButtonDisabled = computed(() => Object.keys(answers).length !== NUMBER_OF_QUESTIONS)
            const sendButtonDisabled = false

            return {
                localname,
                quizQuestions,
                answers,
                sendButtonDisabled,
            }

        },

        methods: {
            sendAnswersButtonPressed() {
                sendAnswers(this.answers).catch(() => {})
            },
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

        <el-button type='primary'
                   class='send-button'
                   :disabled='sendButtonDisabled'
                   @click='sendAnswersButtonPressed'>

            Отправить ответы

        </el-button>

    </div>

</template>

<style scoped>

    .answer-text {
        display: block;
        padding-top: 8px;
    }

    .send-button {
        margin: 16px 0;
    }

</style>
