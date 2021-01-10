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

        <div>
            <el-button type='primary' @click='addExamButtonClicked'>Добавить экзамен</el-button>
        </div>

        <el-table :data="exams">

            <el-table-column type="index"
                             fixed
                             width="50">
            </el-table-column>

            <el-table-column prop="id"
                             fixed
                             label="#"
                             width="50">
            </el-table-column>

            <el-table-column prop="title"
                             label="Экзамен">
            </el-table-column>

        </el-table>

    </div>

</template>

<style scoped>

</style>
