<script lang='ts'>

    import { defineComponent } from 'vue'
    import { useStore } from 'vuex'
    import * as sectionStore from '@/store/sections/types'
    import { SectionType } from '@/store/interfaces'
    import QuestionList from '@/components/QuestionList.vue'
    import Exam from '@/components/Exam.vue'

    const localname = 'Раздел экзамена'

    export default defineComponent({

        name: 'Section',
        localname,

        components: { QuestionList },

        props: {
            sectionId: {
                type: [ Number, String ],
                required: true,
            }
        },

        setup(props) {

            const store = useStore()

            const sections = store.getters[`sections/${ sectionStore.Getters.ITEM_LIST }`]

            const section = sections.find((s: SectionType) => s.id === Number(props.sectionId))
            const exam = section?.exam

            return { localname, exam, section }

        },

        methods: {
            backToListButtonClicked() {
                this.$router.push({ name: Exam.name, params: { examId: this.exam?.id } })
            },
        },

    })

</script>

<template>

    <div>

        <template v-if='exam'>

            <div>Экзамен #{{ exam.id }}</div>
            <div class='exam-title'>{{ exam.title }}</div>

        </template>
        <template v-else>
            <el-alert title='Неизвестный экзамен' type='error' center show-icon :closable='false'></el-alert>
        </template>

        <template v-if='section'>
            <div>{{ localname }}: {{ section.title }}</div>
        </template>
        <template v-else>
            <div>Такого раздела не существует.</div>
        </template>

        <template v-if='section'>
            <QuestionList :section-id='section.id'></QuestionList>
        </template>

        <el-button type='text'
                   @click='backToListButtonClicked'
                   class='section-list-link'>К списку разделов</el-button>

    </div>

</template>

<style scoped>

    .exam-title {
        font-weight: bold;
    }
    .section-list-link {
        margin: 16px;
    }

</style>
