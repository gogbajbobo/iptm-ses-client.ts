<script lang='ts'>

    import { defineComponent } from 'vue'
    import { useStore } from 'vuex'
    import * as questionStore from '@/store/questions/types'
    import * as sectionStore from '@/store/sections/types'
    import * as examStore from '@/store/exams/types'
    import { ExamType, QuestionType, SectionType } from '@/store/interfaces'
    import Section from '@/components/sections/Section.vue'

    import AnswerList from '@/components/answers/AnswerList.vue'

    const localname = 'Вопрос'

    export default defineComponent({

        name: 'Question',
        localname,

        components: { AnswerList },

        props: {
            questionId: { type: [ Number, String ], required: true },
        },

        setup(props) {

            const store = useStore()

            const questions = store.getters[`questions/${ questionStore.Getters.ITEM_LIST }`]
            const question: QuestionType = questions.find((q: QuestionType) => q.id === Number(props.questionId))

            const sectionId = question?.sectionId

            const sections = store.getters[`sections/${ sectionStore.Getters.ITEM_LIST }`]
            const section = sections.find((s: SectionType) => s.id === Number(sectionId))

            const examId = section?.examId
            const exams = store.getters[`exams/${ examStore.Getters.ITEM_LIST }`]
            const exam = exams.find((e: ExamType) => e.id === examId)

            return { localname, question, sectionId, section, examId, exam }

        },

        methods: {

            backToListButtonClicked() {
                this.$router.push({ name: Section.name, params: { sectionId: this.sectionId }})
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
            <div>Раздел экзамена: {{ section.title }}</div>
        </template>
        <template v-else>
            <el-alert title='Неизвестный раздел' type='error' center show-icon :closable='false'></el-alert>
        </template>

        <template v-if='question'>

            <div>{{ localname }}: {{ question.text }}</div>
            <AnswerList :question-id='questionId'></AnswerList>

        </template>
        <template v-else>
            <div>Такого вопроса не существует.</div>
        </template>

        <el-button type='text'
                   @click='backToListButtonClicked'
                   class='question-list-link'>К списку вопросов</el-button>

    </div>

</template>

<style scoped>

    .exam-title {
        font-weight: bold;
    }

    .question-list-link {
        margin: 16px;
    }

</style>
