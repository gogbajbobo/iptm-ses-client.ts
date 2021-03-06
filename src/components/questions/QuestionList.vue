<script lang='ts'>

    import { defineComponent, computed } from 'vue'
    import { questions, getQuestions, deleteQuestion } from '@/store/helper'
    import { AnswerType, QuestionType } from '@/store/interfaces'
    import { showWarningConfirm } from '@/services/messages'

    import QuestionForm from '@/components/questions/QuestionForm.vue'
    import Question from '@/components/questions/Question.vue'

    const localname = 'Вопросы раздела'

    export default defineComponent({

        name: 'QuestionList',
        localname,

        components: { QuestionForm },

        props: {
            sectionId: {
                type: Number,
                required: true,
            },
        },

        data() {
            return {
                selectedQuestion: null as QuestionType | null,
            }
        },

        setup(props) {

            getQuestions({ section: props.sectionId }).catch(() => {})

            return {
                localname,
                questions: computed(questions),
                deleteQuestion,
            }

        },

        methods: {

            questionTextClicked(question: QuestionType) {

                this.$router.push({
                    name: Question.name,
                    params: { questionId: question.id, sectionId: this.sectionId }
                })

            },

            isCurrentRowSelected(question: QuestionType) { return this.selectedQuestion?.id === question.id },

            editQuestionButtonClicked(question: QuestionType) {
                this.selectedQuestion = question
            },

            cancelEditQuestionButtonClicked() {
                this.selectedQuestion = null
            },

            deleteQuestionButtonClicked(question: QuestionType) {

                showWarningConfirm(`Удалить вопрос «${ question.text }»?`, 'Внимание!')
                    .then(() => this.deleteQuestion(question))
                    .catch(() => {})

            },

            classForNumberOfAnswers(answers: AnswerType[]) {

                if (answers.length === 0)
                    return 'gray-number'

                if (answers.filter(a => a.isCorrect).length !== 1)
                    return 'red-number'

                return 'blue-number'

            },

        },

    })

</script>

<template>

    <div>

        <div>{{ localname }}</div>

        <el-table :data="questions">

            <el-table-column type="index" fixed width="50">
            </el-table-column>

            <el-table-column prop="id" fixed label="#" width="50">
            </el-table-column>

            <el-table-column prop="text" label="Вопрос">
                <template #default="scope">

                    <template v-if='isCurrentRowSelected(scope.row)'>

                        <QuestionForm :question='selectedQuestion'
                                      @close-form='cancelEditQuestionButtonClicked'></QuestionForm>

                    </template>

                    <template v-else>

                        <el-button type='text'
                                   @click='questionTextClicked(scope.row)'>{{ scope.row.text }}</el-button>

                    </template>

                </template>
            </el-table-column>

            <el-table-column prop='answers.length' label='Ответов' width='96'>
                <template #default="scope">
                    <span :class='classForNumberOfAnswers(scope.row.answers)' class='number-of-answers'>
                        {{ scope.row.answers.length }}
                    </span>
                </template>
            </el-table-column>

            <el-table-column fixed='right' width='256'>
                <template #default="scope">

                    <template v-if='isCurrentRowSelected(scope.row)'>

                        <el-button type='default'
                                   class='edit-button'
                                   plain
                                   @click='cancelEditQuestionButtonClicked(scope.row)'>Отмена</el-button>

                    </template>
                    <template v-else>

                        <el-button type='warning'
                                   class='edit-button'
                                   plain
                                   @click='editQuestionButtonClicked(scope.row)'>Редактировать</el-button>

                    </template>

                    <el-button type='danger'
                               plain
                               @click='deleteQuestionButtonClicked(scope.row)'>Удалить</el-button>

                </template>
            </el-table-column>

        </el-table>

        <QuestionForm :section='sectionId'></QuestionForm>

    </div>

</template>

<style scoped>

    .edit-button {
        width: 116px;
    }

    .number-of-answers {
        color: white;
        font-weight: bold;
        padding: 0 4px;
        border-radius: 5px;
    }

    .gray-number {
        background-color: var(--color-gray);
    }

    .red-number {
        background-color: var(--color-red);
    }

    .blue-number {
        background-color: var(--color-blue);
    }

</style>
