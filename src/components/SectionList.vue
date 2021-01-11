<script lang='ts'>

import {defineComponent, computed, ref} from 'vue'
    import { useStore } from 'vuex'
    import * as sectionStore from '@/store/sections/types'
    import SectionForm from '@/components/SectionForm.vue'

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

            let sectionFormVisible = ref(false)
            let selectedSection: any = null

            return { localname, sections, sectionFormVisible, selectedSection }

        },

        methods: {

            addSectionButtonClicked() {
                this.sectionFormVisible = true
            },

            closeSectionForm() {
                this.sectionFormVisible = false
            },

        },

    })

</script>

<template>

    <div>

        <div>{{ localname }} {{ examId }}</div>
        <div>{{ sections }}</div>

        <div>
            <el-button type='primary' @click='addSectionButtonClicked'>Добавить раздел</el-button>
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

</style>
