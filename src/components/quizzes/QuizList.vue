<script lang='ts'>

    import { defineComponent, computed } from 'vue'
    import { categories, getCategories, getQuizzes, quizzes } from '@/store/helper'
    import QuizCreate from '@/components/quizzes/QuizCreate.vue'

    const localname = 'Тестирование'

    export default defineComponent({

        name: 'QuizList',
        localname,

        data() {
            return {
                selectedCategory: null as number | null,
                categoryFormVisible: false,
            }
        },

        setup() {

            Promise.all([ getCategories(), getQuizzes() ])
                .catch(() => {})

            return {
                localname,
                categories: computed(categories),
                quizzes: computed(quizzes),
            }

        },

        methods: {

            addButtonClicked() { this.categoryFormVisible = true },
            closeForm() { this.categoryFormVisible = false },

            cancelForm() {

                this.selectedCategory = null
                this.closeForm()

            },

            okForm() {

                if (this.selectedCategory)
                    this.$router.push({ name: QuizCreate.name, params: { categoryId: this.selectedCategory } })

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

            <el-table-column prop="section.exam.title" fixed label="Экзамен">
            </el-table-column>

            <el-table-column prop="section.title" fixed label="Раздел">
            </el-table-column>

            <el-table-column prop="section.category.title" fixed label="Категория">
            </el-table-column>

            <el-table-column prop="examineeIds.length" fixed label="Число участников">
            </el-table-column>

        </el-table>

        <el-dialog title="Выбирите категорию тестирования"
                   :model-value="categoryFormVisible"
                   @closed='closeForm'
                   :destroy-on-close='true'
                   width="30%">

            <el-select v-model="selectedCategory" placeholder="Категория">
                <el-option v-for="category in categories"
                           :key="category.id"
                           :label="category.title"
                           :value="category.id">
                </el-option>
            </el-select>

            <div class='form-buttons'>

                <el-button @click="cancelForm">Отменить</el-button>
                <el-button type="primary" @click="okForm" :disabled='!selectedCategory'>Ок</el-button>

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
