<script lang='ts'>

    import { defineComponent } from 'vue'
    import { useStore } from 'vuex'
    import { ExamType } from '@/store/interfaces'
    import * as examStore from '@/store/exams/types'

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

    })

</script>

<template>

    <div>
        <div>{{ localname }} {{ examId }} {{ exam.title }}</div>
    </div>

</template>

<style scoped>

</style>
