<script lang='ts'>

    import { defineComponent } from 'vue'
    import { useStore } from 'vuex'
    import * as questionStore from '@/store/questions/types'
    import * as sectionStore from '@/store/sections/types'
    import { QuestionType, SectionType } from '@/store/interfaces'
    import { paths } from '@/router/paths'

    import AnswerList from '@/components/AnswerList.vue'

    const localname = 'Вопрос'

    export default defineComponent({

        name: 'Question',
        localname,

        components: { AnswerList },

        props: {
            questionId: { type: [ Number, String ], required: true },
            sectionId: { type: [ Number, String ], required: true },
        },

        setup(props) {

            const store = useStore()

            const questions = store.getters[`questions/${ questionStore.Getters.ITEM_LIST }`]
            const question: QuestionType = questions.find((q: QuestionType) => q.id === Number(props.questionId))

            const sections = store.getters[`sections/${ sectionStore.Getters.ITEM_LIST }`]
            const section = sections.find((s: SectionType) => s.id === Number(props.sectionId))

            const exam = section?.exam

            return { localname, question, section, exam }

        },

        methods: {

            backToListButtonClicked() {
                this.$router.push(paths.EXAM_LIST)
            },

        },

    })

</script>

<template>

    <div>

        <div>{{ exam?.title }}</div>
        <div>{{ section?.title }}</div>
        <div>{{ localname }} {{ questionId }}</div>

        <template v-if='question'>

            <div>{{ question.text }}</div>

            <AnswerList :question-id='questionId'></AnswerList>

        </template>
        <template v-else>

            <div>Такого вопроса не существует.</div>
            <el-button type='text' @click='backToListButtonClicked'>К списку экзаменов</el-button>

        </template>

    </div>

</template>

<style scoped>

</style>
