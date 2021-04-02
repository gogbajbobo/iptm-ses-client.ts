<script lang='ts'>

    import { defineComponent, computed } from 'vue'
    import { answers, getAnswers, updateAnswer, deleteAnswer } from '@/store/helper'
    import { AnswerType } from '@/store/interfaces'
    import { showError, showWarningConfirm } from '@/services/messages'
    import AnswerForm from '@/components/answers/AnswerForm.vue'

    const localname = 'Ответы на вопрос'

    export default defineComponent({

        name: 'AnswerList',
        localname,

        components: { AnswerForm },

        props: {
            questionId: { type: [ Number, String ], required: true },
        },

        data() {
            return {
                selectedAnswer: null as AnswerType | null,
            }
        },

        setup(props) {

            getAnswers({ question: props.questionId })
                .catch(() => {})

            return {
                localname,
                answers: computed(answers),
            }

        },

        methods: {

            isCorrectValueChanged(answer: AnswerType) {

                // console.log(answer)

                const { isCorrect } = answer

                updateAnswer({ ...answer, isCorrect: !isCorrect })
                    .catch(err => showError(err, false))

            },

            isCurrentRowSelected(answer: AnswerType) { return this.selectedAnswer?.id === answer.id },

            editButtonClicked(answer: AnswerType) {
                this.selectedAnswer = answer
            },

            cancelEditButtonClicked() {
                this.selectedAnswer = null
            },

            deleteButtonClicked(answer: AnswerType) {

                showWarningConfirm(`Удалить ответ «${ answer.text }»?`, 'Внимание!')
                    .then(() => deleteAnswer(answer.id))
                    .catch(() => {})

            },

        },

    })

</script>

<template>

    <div>

        <div>{{ localname }}</div>

        <el-table :data="answers">

            <el-table-column type="index" fixed width="50">
            </el-table-column>

            <el-table-column prop="id" fixed label="#" width="50">
            </el-table-column>

            <el-table-column prop="isCorrect" label="Верный" width="72">
                <template #default="scope">

                    <el-switch :value='scope.row.isCorrect'
                               @change='isCorrectValueChanged(scope.row)'
                               :disabled='Boolean(selectedAnswer)'>
                    </el-switch>

                </template>
            </el-table-column>

            <el-table-column prop="text" label="Ответ">
                <template #default="scope">

                    <template v-if='isCurrentRowSelected(scope.row)'>

                        <AnswerForm :answer='selectedAnswer'
                                    @close-form='cancelEditButtonClicked'></AnswerForm>

                    </template>
                    <template v-else>

                        {{ scope.row.text }}

                    </template>

                </template>
            </el-table-column>

            <el-table-column fixed='right' width='256'>
                <template #default="scope">

                    <template v-if='isCurrentRowSelected(scope.row)'>

                        <el-button type='default'
                                   class='edit-button'
                                   plain
                                   @click='cancelEditButtonClicked(scope.row)'>Отмена</el-button>

                    </template>
                    <template v-else>

                        <el-button type='warning'
                                   class='edit-button'
                                   plain
                                   @click='editButtonClicked(scope.row)'>Редактировать</el-button>

                    </template>

                    <el-button type='danger'
                               plain
                               @click='deleteButtonClicked(scope.row)'>Удалить</el-button>

                </template>
            </el-table-column>

        </el-table>

        <AnswerForm :question-id='questionId'></AnswerForm>

    </div>

</template>

<style scoped>

    .edit-button {
        width: 116px;
    }

</style>
