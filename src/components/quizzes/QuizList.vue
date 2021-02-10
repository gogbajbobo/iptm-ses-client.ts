<script lang='ts'>

    import { defineComponent, computed } from 'vue'
    import { categories, getCategories } from '@/store/helper'
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

            getCategories().catch(() => {})

            return {
                localname,
                categories: computed(categories)
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
