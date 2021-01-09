<script lang='ts'>

    import { defineComponent, PropType, computed } from 'vue'
    import { useStore } from 'vuex'
    import { UserType } from '@/store/interfaces'
    import * as categoryStore from '@/store/categories/types'
    import * as examineeStore from '@/store/examinees/types'

    export default defineComponent({

        name: 'ExamineeForm',

        props: {
            examinee: {
                type: Object as PropType<UserType>,
                required: true,
            }
        },

        data() {
            return {
                selectedCategories: [ ...this.examinee.categories ].map(c => c.id),
            }
        },

        setup() {

            const store = useStore()
            const categories = computed(() => {
                return store.getters[`categories/${ categoryStore.GetterTypes.CATEGORY_LIST }`]
            })
            const getCategories = () => {
                return store.dispatch(`categories/${ categoryStore.ActionTypes.GET_CATEGORIES }`)
            }
            const updateExaminee = (examinee: UserType) => {
                return store.dispatch(`examinees/${ examineeStore.ActionTypes.UPDATE_EXAMINEE }`, examinee)
            }

            getCategories().catch(() => {})

            return { categories, updateExaminee }

        },

        methods: {

            closeForm() { this.$emit('close-form') },

            cancelExamineeForm() { this.closeForm() },

            saveExamineeForm() {

                const newCategories = [ ...this.categories ].filter(c => this.selectedCategories.includes(c.id))
                return this.updateExaminee({ ...this.examinee, categories: newCategories })
                    .then(() => this.closeForm())
                    .catch(() => {})

            },

        },

    })

</script>

<template>

    <div>

        <div>{{ examinee.username }}</div>

        <el-select v-model="selectedCategories" multiple placeholder="Категории">
            <el-option v-for="category in categories"
                       :key="category.id"
                       :label="category.title"
                       :value="category.id">
            </el-option>
        </el-select>

        <div class='form-buttons'>

            <el-button @click="cancelExamineeForm">Отменить</el-button>
            <el-button type="primary" @click="saveExamineeForm">Сохранить</el-button>

        </div>

    </div>

</template>

<style scoped>

    .form-buttons {
        margin-top: 24px;
    }

</style>
