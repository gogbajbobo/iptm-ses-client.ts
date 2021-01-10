<script lang='ts'>

    import { defineComponent, computed } from 'vue'
    import { useStore } from 'vuex'
    import * as examStore from '@/store/exams/types'
    import { showPrompt, showPromptWithValue, showWarningConfirm } from '@/services/messages'
    import { ExamType } from '@/store/interfaces'

    const localname = 'Экзамены'

    export default defineComponent({

        name: 'ExamList',
        localname,

        setup() {

            const store = useStore()

            const exams = computed(() => store.getters[`exams/${ examStore.Getters.ITEM_LIST }`])

            const addExam = (exam: Record<'title', string>) => {
                return store.dispatch(`exams/${ examStore.Actions.ADD_ITEM }`, exam)
            }
            const updateExam = (exam: ExamType) => {
                return store.dispatch(`exams/${ examStore.Actions.UPDATE_ITEM }`, exam)
            }
            const deleteExam = (examId: number) => {
                return store.dispatch(`exams/${ examStore.Actions.DELETE_ITEM }`, examId)
            }

            const getExams = () => store.dispatch(`exams/${ examStore.Actions.GET_ITEMS }`)
            getExams().catch(() => {})

            return { localname, exams, addExam, updateExam, deleteExam }

        },

        methods: {

            addExamButtonClicked() {

                showPrompt('Название экзамена:', 'Добавить экзамен')
                    .then(({ value: title }) => this.addExam({ title }))
                    .catch(() => {})

            },

            editExamButtonClicked(exam: ExamType) {

                showPromptWithValue('Название экзамена:', 'Редактировать экзамен', exam.title)
                    .then(({ value: title }) => {

                        const newExam = {
                            id: exam.id,
                            title
                        }

                        return this.updateExam(newExam)

                    })
                    .catch(() => {})

            },

            deleteExamButtonClicked(exam: ExamType) {

                showWarningConfirm(`Удалить экзамен «${ exam.title }»?`, 'Внимание!')
                    .then(() => this.deleteExam(exam.id))
                    .catch(() => {})

            },

        },

    })

</script>

<template>

    <div>

        <div> {{ localname }} </div>

        <div>
            <el-button type='primary' @click='addExamButtonClicked'>Добавить экзамен</el-button>
        </div>

        <el-table :data="exams">

            <el-table-column type="index"
                             fixed
                             width="50">
            </el-table-column>

            <el-table-column prop="id"
                             fixed
                             label="#"
                             width="50">
            </el-table-column>

            <el-table-column prop="title"
                             label="Экзамен">
            </el-table-column>

            <el-table-column fixed="right" width='256'>
                <template #default="scope">

                    <el-button type='warning'
                               plain
                               @click='editExamButtonClicked(scope.row)'>Редактировать</el-button>

                    <el-button type='danger'
                               plain
                               @click='deleteExamButtonClicked(scope.row)'>Удалить</el-button>

                </template>
            </el-table-column>

        </el-table>

    </div>

</template>

<style scoped>

</style>
