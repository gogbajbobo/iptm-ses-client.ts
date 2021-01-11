<script lang='ts'>

    import { defineComponent, computed, PropType, ref } from 'vue'
    import { useStore } from 'vuex'
    import * as categoryStore from '@/store/categories/types'
    import * as sectionStore from '@/store/sections/types'
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

            const store = useStore()

            const categories = computed(() => {
                return store.getters[`categories/${ categoryStore.GetterTypes.CATEGORY_LIST }`]
            })
            const getCategories = () => {
                return store.dispatch(`categories/${ categoryStore.ActionTypes.GET_CATEGORIES }`)
            }
            getCategories().catch(() => {})

            const addSection = (section: SectionEmbryo) => {
                return store.dispatch(`sections/${ sectionStore.Actions.ADD_ITEM }`, section)
            }

            const selectedCategory = ref(props.section?.category)
            const sectionTitle = ref('')

            return { categories, selectedCategory, sectionTitle, addSection }

        },

        methods: {

            closeForm() { this.$emit('close-form') },

            cancelSectionForm() { this.closeForm() },

            saveSectionForm() {

                if (!this.sectionTitle.trim().length)
                    return showAlert('Нет названия раздела', 'Ошибка!').catch(() => {})

                if (!this.selectedCategory)
                    return showAlert('Не выбрана категория', 'Ошибка!').catch(() => {})

                const section: SectionEmbryo = {
                    title: this.sectionTitle,
                    category: this.selectedCategory,
                    exam: this.examId,
                }

                this.addSection(section)
                    .then(this.closeForm)
                    .catch(() => {})

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
