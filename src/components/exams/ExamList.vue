<script lang='ts'>

    import { defineComponent, computed } from 'vue'
    import { getExams, addExam, updateExam, deleteExam, recreateExams, exams } from '@/store/helper'
    import { showPrompt, showPromptWithValue, showWarningConfirm } from '@/services/messages'
    import { ExamType } from '@/store/interfaces'
    import Exam from '@/components/exams/Exam.vue'
    import { isAdmin } from '@/services/helper'
    import { isProduction } from '@/services/constants'
    import { logger } from '@/services/logger'

    const localname = 'Экзамены'

    export default defineComponent({

        name: 'ExamList',
        localname,

        setup() {

            getExams().catch(() => {})

            return {
                localname,
                exams: computed(exams),
                addExam,
                updateExam,
                deleteExam,
                isProduction,
                isAdmin,
            }

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

            examTitleClicked(exam: ExamType) {
                this.$router.push({ name: Exam.name, params: { examId: exam.id }})
            },

            recreateExamsButtonPressed() {

                if (isProduction)
                    logger.error('this method should not be called in production mode')
                if (!isAdmin())
                    logger.error('you should be admin to call this method')

                recreateExams().catch(() => {})

            },

        },

    })

</script>

<template>

    <div>

        <div> {{ localname }} </div>

        <el-table :data="exams">

            <el-table-column type="index" fixed width="50">
            </el-table-column>

            <el-table-column prop="id" fixed label="#" width="50">
            </el-table-column>

            <el-table-column prop="title" label="Экзамен">
                <template #default="scope">

                    <el-button type='text' @click='examTitleClicked(scope.row)'>{{ scope.row.title }}</el-button>

                </template>
            </el-table-column>

            <el-table-column prop='sectionIds.length' label='Разделов' width='96'>
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

        <div class='add-item-button'>

            <el-button type='primary'
                       @click='addExamButtonClicked'>Добавить экзамен</el-button>

        </div>

        <div v-if='!isProduction && isAdmin()' class='recreate-exams-button'>

            <el-button type='danger'
                       @click='recreateExamsButtonPressed'>Пересоздать тестовую базу экзаменов</el-button>

        </div>

    </div>

</template>

<style scoped>

    .add-item-button, .recreate-exams-button {
        margin-top: 16px;
    }

</style>
