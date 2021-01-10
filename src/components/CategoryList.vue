<script lang='ts'>

    import { defineComponent, computed } from 'vue'
    import { useStore } from 'vuex'
    import { CategoryType } from '@/store/interfaces'
    import { ActionTypes, GetterTypes } from '@/store/categories/types'
    import { showPrompt, showPromptWithValue, showWarningConfirm } from '@/services/messages'

    const localname = 'Категории'

    export default defineComponent({

        name: 'CategoryList',
        localname,

        setup() {

            const store = useStore()
            const categories = computed(() => store.getters[`categories/${ GetterTypes.CATEGORY_LIST }`])
            const getCategories = () => {
                return store.dispatch(`categories/${ ActionTypes.GET_CATEGORIES }`)
            }
            const addCategory = ({ value: title }: Record<string, string>) => {
                return store.dispatch(`categories/${ ActionTypes.ADD_CATEGORY }`, { title })
            }
            const updateCategory = (category: CategoryType) => {
                return store.dispatch(`categories/${ ActionTypes.UPDATE_CATEGORY }`, category)
            }
            const deleteCategory = (categoryId: number) => {
                return store.dispatch(`categories/${ ActionTypes.DELETE_CATEGORY }`, categoryId)
            }

            getCategories().catch(() => {})

            return { localname, store, categories, addCategory, updateCategory, deleteCategory }

        },

        methods: {

            addCategoryButtonClicked() {

                showPrompt('Название категории:', 'Добавить категорию')
                    .then(this.addCategory)
                    .catch(() => {})

            },

            editCategoryButtonClicked(category: CategoryType) {

                showPromptWithValue('Название категории:', 'Редактировать категорию', category.title)
                    .then(({ value: title }) => {

                        const newCategory = {
                            id: category.id,
                            title
                        }

                        return this.updateCategory(newCategory)

                    })
                    .catch(() => {})

            },

            deleteCategoryButtonClicked(category: CategoryType) {

                showWarningConfirm(`Удалить категорию «${ category.title }»?`, 'Внимание!')
                    .then(() => this.deleteCategory(category.id))
                    .catch(() => {})

            },

        },

    })

</script>

<template>

    <div>

        <div>{{ localname }}</div>

        <div>
            <el-button type='primary' @click='addCategoryButtonClicked'>Добавить категорию</el-button>
        </div>

        <el-table :data="categories">

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
                             label="Категория">
            </el-table-column>

            <el-table-column fixed='right' width='256'>
                <template #default="scope">

                    <el-button type='warning'
                               plain
                               @click='editCategoryButtonClicked(scope.row)'>Редактировать</el-button>

                    <el-button type='danger'
                               plain
                               @click='deleteCategoryButtonClicked(scope.row)'>Удалить</el-button>

                </template>
            </el-table-column>

        </el-table>

    </div>

</template>

<style scoped>

</style>
