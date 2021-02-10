<script lang='ts'>

    import { defineComponent, computed, ref } from 'vue'

    import { getSections, deleteSection, sections, getCategories } from '@/store/helper'
    import { SectionType } from '@/store/interfaces'

    import { showWarningConfirm } from '@/services/messages'

    import SectionForm from '@/components/sections/SectionForm.vue'
    import Section from '@/components/sections/Section.vue'

    const localname = 'Разделы экзамена'

    export default defineComponent({

        name: 'SectionList',
        localname,

        components: { SectionForm },

        props: {
            examId: {
                type: Number,
                required: true,
            }
        },

        setup(props) {

            let sectionFormVisible = ref(false)
            let selectedSection: any = null

            getSections({ exam: props.examId })
                .then(getCategories)
                .catch(() => {})

            return {
                localname,
                sections: computed(sections),
                sectionFormVisible,
                selectedSection,
                deleteSection
            }

        },

        methods: {

            showSectionForm() { this.sectionFormVisible = true },
            closeSectionForm() { this.sectionFormVisible = false },

            addSectionButtonClicked() {

                this.selectedSection = null
                this.showSectionForm()

            },

            editSectionButtonClicked(section: SectionType) {

                this.selectedSection = section
                this.showSectionForm()

            },

            deleteSectionButtonClicked(section: SectionType) {

                showWarningConfirm(`Удалить категорию «${ section.title }»?`, 'Внимание!')
                    .then(() => this.deleteSection(section.id))
                    .catch(() => {})

            },

            categoryTitle(section: SectionType) { return section.category?.title },

            sectionTitleClicked(section: SectionType) {
                this.$router.push({ name: Section.name, params: { sectionId: section.id }})
            },

        },

    })

</script>

<template>

    <div>

        <div>{{ localname }}</div>

        <el-table :data="sections">

            <el-table-column type="index" fixed width="50">
            </el-table-column>

            <el-table-column prop="id" fixed label="#" width="50">
            </el-table-column>

            <el-table-column prop="title" label="Раздел">
                <template #default="scope">

                    <el-button type='text' @click='sectionTitleClicked(scope.row)'>{{ scope.row.title }}</el-button>

                </template>
            </el-table-column>

            <el-table-column prop="category" label="Категория">
                <template #default="scope">
                    {{ categoryTitle(scope.row) }}
                </template>
            </el-table-column>

            <el-table-column prop='questionIds.length' label='Вопросов' width='96'>
            </el-table-column>

            <el-table-column fixed='right' width='256'>
                <template #default="scope">

                    <el-button type='warning'
                               plain
                               @click='editSectionButtonClicked(scope.row)'>Редактировать</el-button>

                    <el-button type='danger'
                               plain
                               @click='deleteSectionButtonClicked(scope.row)'>Удалить</el-button>

                </template>
            </el-table-column>

        </el-table>

        <div class='add-item-button'>

            <el-button type='primary'
                       @click='addSectionButtonClicked'>Добавить раздел</el-button>

        </div>

        <el-dialog title="Раздел экзамена"
                   :model-value="sectionFormVisible"
                   @closed='closeSectionForm'
                   :destroy-on-close='true'
                   width="30%">

            <SectionForm :section='selectedSection' :exam-id='examId' @close-form='closeSectionForm'></SectionForm>

        </el-dialog>

    </div>

</template>

<style scoped>

    .add-item-button {
        margin-top: 16px;
    }

</style>
