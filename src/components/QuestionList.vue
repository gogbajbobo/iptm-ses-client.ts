<script lang='ts'>

    import { defineComponent, computed } from 'vue'
    import { useStore } from 'vuex'
    import * as questionStore from '@/store/questions/types'
    import QuestionForm from './QuestionForm.vue'

    const localname = 'Вопросы раздела'

    export default defineComponent({

        name: 'QuestionList',
        localname,

        components: { QuestionForm },

        props: {
            sectionId: {
                type: Number,
                required: true,
            }
        },

        setup(props) {

            const store = useStore()

            const questions = computed(() => store.getters[`questions/${ questionStore.Getters.ITEM_LIST }`])

            const getQuestions = () => {

                return store.dispatch(
                    `questions/${ questionStore.Actions.GET_ITEMS }`,
                    { section: props.sectionId }
                    )

            }
            getQuestions().catch(() => {})

            return { localname, questions }

        },

        methods: {
            editQuestionButtonClicked() { console.log('editQuestionButtonClicked') },
            deleteQuestionButtonClicked() { console.log('deleteQuestionButtonClicked') },
        },

    })

</script>

<template>

    <div>

        <div>{{ localname }}</div>

        <el-table :data="questions">

            <el-table-column type="index" fixed width="50">
            </el-table-column>

            <el-table-column prop="id" fixed label="#" width="50">
            </el-table-column>

            <el-table-column prop="text" label="Вопрос">
            </el-table-column>

            <el-table-column fixed='right' width='256'>
                <template #default="scope">

                    <el-button type='warning'
                               plain
                               @click='editQuestionButtonClicked(scope.row)'>Редактировать</el-button>

                    <el-button type='danger'
                               plain
                               @click='deleteQuestionButtonClicked(scope.row)'>Удалить</el-button>

                </template>
            </el-table-column>

        </el-table>

        <QuestionForm :section='sectionId'></QuestionForm>

    </div>

</template>

<style scoped>

</style>
