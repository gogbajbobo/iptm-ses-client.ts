<script lang='ts'>

    import { defineComponent, computed } from 'vue'
    import { getQuizzes, quizzes, getExams, exams } from '@/store/helper'
    import QuizCreate from '@/components/quizzes/QuizCreate.vue'

    const localname = 'Тестирование'

    export default defineComponent({

        name: 'QuizList',
        localname,

        data() {
            return {
                selectedExam: null as number | null,
                examFormVisible: false,
            }
        },

        setup() {

            Promise.all([ getExams(), getQuizzes() ])
                .catch(() => {})

            return {
                localname,
                quizzes: computed(quizzes),
                exams: computed(exams),
            }

        },

        methods: {

            addButtonClicked() { this.examFormVisible = true },
            closeForm() { this.examFormVisible = false },

            cancelForm() {

                this.selectedExam = null
                this.closeForm()

            },

            okForm() {

                if (this.selectedExam)
                    this.$router.push({ name: QuizCreate.name, params: { examId: this.selectedExam } })

            },

        },

    })

</script>

<template>

    <div>

        <div>{{ localname }}</div>

        <div class='add-item-button'>

            <el-button type='primary'
                       @click='addButtonClicked'>Создать тестирование</el-button>

        </div>

        <el-table :data='quizzes'>

            <el-table-column type="index" fixed width="50">
            </el-table-column>

            <el-table-column prop="id" fixed label="#" width="50">
            </el-table-column>

            <el-table-column prop="exam.title" fixed label="Экзамен">
            </el-table-column>

            <el-table-column prop="examineeIds.length" fixed label="Число участников">
            </el-table-column>

        </el-table>

        <el-dialog title="Выберите экзамен"
                   :model-value="examFormVisible"
                   @closed='closeForm'
                   :destroy-on-close='true'
                   width="30%">

            <el-select v-model="selectedExam" placeholder="Экзамен">
                <el-option v-for="exam in exams"
                           :key="exam.id"
                           :label="exam.title"
                           :value="exam.id">
                </el-option>
            </el-select>

            <div class='form-buttons'>

                <el-button @click="cancelForm">Отменить</el-button>
                <el-button type="primary" @click="okForm" :disabled='!selectedExam'>Ок</el-button>

            </div>

        </el-dialog>

    </div>

</template>

<style scoped>

    .add-item-button {
        margin-top: 16px;
    }

    .form-buttons {
        margin-top: 24px;
    }

</style>
