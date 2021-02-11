<script lang='ts'>

    import { defineComponent } from 'vue'
    import { sections, exams } from '@/store/helper'
    import { SectionType, ExamType } from '@/store/interfaces'
    import QuestionList from '@/components/questions/QuestionList.vue'
    import { paths } from '@/router/paths'
    import Exam from '@/components/exams/Exam.vue'

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

            const section = sections().find((s: SectionType) => s.id === Number(props.sectionId))
            const examId = section?.examId
            const exam = exams().find((e: ExamType) => e.id === examId)

            return { localname, exam, examId, section }

        },

        methods: {
            backToListButtonClicked() {

                this.$router.push(
                    this.examId
                        ? { name: Exam.name, params: { examId: this.examId } }
                        : paths.EXAM_LIST
                )

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
