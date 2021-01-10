<script lang='ts'>

    import { defineComponent, computed } from 'vue'
    import { useStore } from 'vuex'
    import * as examStore from '@/store/exams/types'
    import { showPrompt } from '@/services/messages'

    const localname = 'Экзамены'

    export default defineComponent({

        name: 'ExamList',
        localname,

        setup() {

            const store = useStore()

            const exams = computed(() => store.getters[`exams/${ examStore.Getters.ITEM_LIST }`])
            const addExam = (exam: Record<'title', string>) => {
                return store.dispatch(`exams/${ examStore.Actions.ADD_ITEM }`, exam)
            }

            const getExams = () => store.dispatch(`exams/${ examStore.Actions.GET_ITEMS }`)
            getExams().catch(() => {})

            return { localname, exams, addExam }

        },

        methods: {

            addExamButtonClicked() {

                showPrompt('Название экзамена:', 'Добавить экзамен')
                    .then(({ value: title }) => this.addExam({ title }))
                    .catch(() => {})

            },

        },

    })

</script>

<template>

    <div>

        <div> {{ localname }} </div>
        {{ exams }}

        <div>
            <el-button type='primary' @click='addExamButtonClicked'>Добавить экзамен</el-button>
        </div>

    </div>

</template>

<style scoped>

</style>
