<script lang='ts'>

    import { defineComponent, PropType, computed, ref } from 'vue'
    import { getCategories, categories, updateExaminee } from '@/store/helper'
    import { UserType } from '@/store/interfaces'

    export default defineComponent({

        name: 'ExamineeForm',

        props: {
            examinee: {
                type: Object as PropType<UserType>,
                required: true,
            }
        },

        setup(props) {

            getCategories().catch(() => {})

            const selectedCategories = ref([ ...props.examinee.categories ].map(c => c.id))

            return {
                categories: computed(categories),
                selectedCategories,
            }

        },

        methods: {

            closeForm() { this.$emit('close-form') },

            cancelExamineeForm() { this.closeForm() },

            saveExamineeForm() {

                const newCategories = [ ...this.categories ].filter(c => this.selectedCategories.includes(c.id))
                return updateExaminee({ ...this.examinee, categories: newCategories })
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
