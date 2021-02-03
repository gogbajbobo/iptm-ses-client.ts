<script lang='ts'>

    import { defineComponent, computed } from 'vue'
    import { useStore } from 'vuex'
    import * as questionStore from '@/store/questions/types'
    import QuestionForm from './QuestionForm.vue'
    import { QuestionType } from '@/store/interfaces'
    import { showWarningConfirm } from '@/services/messages'

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

            const store = useStore()

            const questions = computed(() => store.getters[`questions/${ questionStore.Getters.ITEM_LIST }`])

            const getQuestions = () => {

                const payload = { section: props.sectionId }
                return store.dispatch(`questions/${ questionStore.Actions.GET_ITEMS }`, payload)

            }
            getQuestions().catch(() => {})

            const deleteQuestion = (question: QuestionType) => {
                return store.dispatch(`questions/${ questionStore.Actions.DELETE_ITEM }`, question.id)
            }

            return { localname, questions, deleteQuestion }

        },

        methods: {

            questionTextClicked() { console.log('questionTextClicked') },

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
                        <QuestionForm :question='selectedQuestion'></QuestionForm>
                    </template>
                    <template v-else>
                        <el-button type='text' @click='questionTextClicked(scope.row)'>{{ scope.row.text }}</el-button>
                    </template>

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

</style>
