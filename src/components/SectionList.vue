<script lang='ts'>

    import { defineComponent, computed, ref } from 'vue'
    import { useStore } from 'vuex'
    import * as sectionStore from '@/store/sections/types'
    import SectionForm from '@/components/SectionForm.vue'
    import { SectionType } from '@/store/interfaces'
    import { showWarningConfirm } from '@/services/messages'

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

            const store = useStore()

            const sections = computed(() => store.getters[`sections/${ sectionStore.Getters.ITEM_LIST }`])

            const getSections = () => {

                return store.dispatch(
                    `sections/${ sectionStore.Actions.GET_ITEMS }`,
                    { exam: props.examId }
                    )

            }
            getSections().catch(() => {})

            const deleteSection = (sectionId: number) => {
                return store.dispatch(`sections/${ sectionStore.Actions.DELETE_ITEM }`, sectionId)
            }

            let sectionFormVisible = ref(false)
            let selectedSection: any = null

            return { localname, sections, sectionFormVisible, selectedSection, deleteSection }

        },

        methods: {

            addSectionButtonClicked() {
                this.sectionFormVisible = true
            },

            closeSectionForm() {
                this.sectionFormVisible = false
            },

            editSectionButtonClicked(section: SectionType) {
                console.log('edit', section)
            },

            deleteSectionButtonClicked(section: SectionType) {

                showWarningConfirm(`Удалить категорию «${ section.title }»?`, 'Внимание!')
                    .then(() => this.deleteSection(section.id))
                    .catch(() => {})

            },

            categoryTitle(section: SectionType) { return section.category?.title },

        },

    })

</script>

<template>

    <div>

        <div>{{ localname }} {{ examId }}</div>

        <div>
            <el-button type='primary' @click='addSectionButtonClicked'>Добавить раздел</el-button>
        </div>

        <el-table :data="sections">

            <el-table-column type="index" fixed width="50">
            </el-table-column>

            <el-table-column prop="id" fixed label="#" width="50">
            </el-table-column>

            <el-table-column prop="title" label="Раздел">
            </el-table-column>

            <el-table-column prop="category" label="Категория">
                <template #default="scope">
                    {{ categoryTitle(scope.row) }}
                </template>
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

</style>
