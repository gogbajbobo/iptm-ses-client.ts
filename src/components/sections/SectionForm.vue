<script lang='ts'>

    import { defineComponent, computed, PropType, ref } from 'vue'
    import { categories, addSection, updateSection } from '@/store/helper'
    import { SectionEmbryo, SectionType } from '@/store/interfaces'
    import { showAlert } from '@/services/messages'


    export default defineComponent({

        name: 'SectionForm',

        props: {
            section: {
                type: Object as PropType<SectionType> | null,
            },
            examId: {
                type: Number,
                required: true,
            }
        },

        setup(props) {

            const selectedCategory = ref(props.section?.category.id)
            const sectionTitle = ref(props.section?.title || '')

            return {
                categories: computed(categories),
                selectedCategory,
                sectionTitle,
                addSection,
                updateSection
            }

        },

        methods: {

            closeForm() { this.$emit('close-form') },

            cancelSectionForm() { this.closeForm() },

            saveSectionForm() {

                if (!this.sectionTitle.trim().length)
                    return showAlert('Нет названия раздела', 'Ошибка!').catch(() => {})

                if (!this.selectedCategory)
                    return showAlert('Не выбрана категория', 'Ошибка!').catch(() => {})

                if (this.section) {

                    const { id, examId } = this.section

                    const section = {
                        id,
                        examId,
                        title: this.sectionTitle,
                        category: this.selectedCategory
                    }

                    this.updateSection(section)
                        .then(this.closeForm)
                        .catch(() => {})


                } else {

                    const section: SectionEmbryo = {
                        title: this.sectionTitle,
                        category: this.selectedCategory,
                        examId: this.examId,
                    }

                    this.addSection(section)
                        .then(this.closeForm)
                        .catch(() => {})

                }

            },

        },

    })

</script>

<template>

    <div>

        <el-input v-model='sectionTitle' placeholder='Название раздела' class='title-input'></el-input>

        <el-select v-model="selectedCategory" placeholder="Категория">
            <el-option v-for="category in categories"
                       :key="category.id"
                       :label="category.title"
                       :value="category.id">
            </el-option>
        </el-select>

        <div class='form-buttons'>

            <el-button @click="cancelSectionForm">Отменить</el-button>
            <el-button type="primary" @click="saveSectionForm">Сохранить</el-button>

        </div>

    </div>

</template>

<style scoped>

    .title-input {
        margin-bottom: 24px;
    }

    .form-buttons {
        margin-top: 24px;
    }

</style>
