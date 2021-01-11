<script lang='ts'>

    import { defineComponent } from 'vue'
    import { useStore } from 'vuex'
    import * as sectionStore from '@/store/sections/types'
    import { SectionType } from '@/store/interfaces'
    import QuestionList from '@/components/QuestionList.vue'

    const localname = 'Раздел экзамена'

    export default defineComponent({

        name: 'Section',
        localname,

        components: { QuestionList },

        props: {
            sectionId: { type: [ Number, String ], required: true }
        },

        setup(props) {

            const store = useStore()

            const sections = store.getters[`sections/${ sectionStore.Getters.ITEM_LIST }`]

            const section = sections.find((s: SectionType) => s.id === Number(props.sectionId))
            const exam = section?.exam

            return { localname, exam, section }

        },

        methods: {
            backToSectionsButtonClicked() {},
        },

    })

</script>

<template>

    <div>

        <div>{{ exam?.title }}</div>
        <div>{{ localname }} {{ sectionId }}</div>

        <template v-if='section'>

            <div>{{ section.title }}</div>

            <QuestionList :section-id='section.id'></QuestionList>

        </template>
        <template v-else>

            <div>Такого раздела не существует.</div>
            <el-button type='text' @click='backToSectionsButtonClicked'>К списку разделов</el-button>

        </template>

    </div>

</template>

<style scoped>

</style>
