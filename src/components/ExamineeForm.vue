<script lang='ts'>

    import { defineComponent, PropType, computed, toRefs } from 'vue'
    import { useStore } from 'vuex'
    import { UserType } from '@/store/interfaces'
    import { ActionTypes, GetterTypes } from '@/store/categories/types'

    export default defineComponent({

        name: 'ExamineeForm',

        props: {
            examinee: {
                type: Object as PropType<UserType>,
                required: true,
            }
        },

        setup(props) {

            const store = useStore()
            const categories = computed(() => store.getters[`categories/${ GetterTypes.CATEGORY_LIST }`])
            const getCategories = () => store.dispatch(`categories/${ ActionTypes.GET_CATEGORIES }`)

            getCategories().catch(() => {})

            const { categories: selectedCategories } = toRefs(props.examinee)

            return { categories, selectedCategories }

        },

        methods: {

            closeForm() { this.$emit('close-form') },

            cancelExamineeForm() { this.closeForm() },

            saveExamineeForm() { this.closeForm() },

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
                       :value="category.title">
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
