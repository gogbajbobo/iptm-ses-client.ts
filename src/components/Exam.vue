<script lang='ts'>

    import { defineComponent } from 'vue'
    import { useStore } from 'vuex'
    import { ExamType } from '@/store/interfaces'
    import * as examStore from '@/store/exams/types'
    import { paths } from '@/router/paths'
    import SectionList from '@/components/SectionList.vue'

    const localname = 'Экзамен'

    export default defineComponent({

        name: 'Exam',
        localname,

        components: { SectionList },

        props: {
            examId: {
                type: [ Number, String ],
                required: true,
            }
        },

        setup(props) {

            const store = useStore()
            const exams = store.getters[`exams/${ examStore.Getters.ITEM_LIST }`]
            const exam = exams.find((e: ExamType) => e.id === Number(props.examId))

            return { localname, exam }

        },

        methods: {

            backToListButtonClicked() {
                this.$router.push(paths.EXAM_LIST)
            }

        },

    })

</script>

<template>

    <div>

        <div>
            <span>{{ localname }} #{{ examId }}</span>
        </div>

        <template v-if='exam'>

            <div class='exam-title'>{{ exam.title }}</div>

            <SectionList :exam-id='Number(examId)'></SectionList>

        </template>

        <template v-else>
            <div>Такого экзамена не существует.</div>
        </template>

        <el-button type='text'
                   @click='backToListButtonClicked'
                   class='exam-list-link'>К списку экзаменов</el-button>

    </div>

</template>

<style scoped>

    .exam-title {
        font-weight: bold;
    }
    .exam-list-link {
        margin: 16px;
    }

</style>
