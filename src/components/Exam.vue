<script lang='ts'>

    import { defineComponent } from 'vue'
    import { useStore } from 'vuex'
    import { ExamType } from '@/store/interfaces'
    import * as examStore from '@/store/exams/types'
    import { paths } from '@/router/paths'

    const localname = 'Экзамен'

    export default defineComponent({

        name: 'Exam',
        localname,

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

            backToExamsButtonClicked() {
                this.$router.push(paths.EXAM_LIST)
            }

        },

    })

</script>

<template>

    <div>

        <div>{{ localname }} {{ examId }}</div>

        <template v-if='exam'>
            <div>{{ exam.title }}</div>
        </template>
        <template v-else>
            <div>Такого экзамена не существует.</div>
            <el-button type='text' @click='backToExamsButtonClicked'>К списку экзаменов</el-button>
        </template>

    </div>

</template>

<style scoped>

</style>
