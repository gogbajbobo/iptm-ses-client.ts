<script lang='ts'>

    import { defineComponent, computed } from 'vue'
    import { useStore } from 'vuex'
    import * as answerStore from '@/store/answers/types'

    import AnswerForm from '@/components/AnswerForm.vue'

    const localname = 'Ответы на вопрос'

    export default defineComponent({

        name: 'AnswerList',
        localname,

        components: { AnswerForm },

        props: {
            questionId: { type: [ Number, String ], required: true },
        },

        setup(props) {

            const store = useStore()

            const answers = computed(() => store.getters[`answers/${ answerStore.Getters.ITEM_LIST }`])

            const getAnswers = () => {

                const payload = { questionId: props.questionId }

                return store.dispatch(`answers/${ answerStore.Actions.GET_ITEMS }`, payload)

            }
            getAnswers().catch(() => {})

            return { localname, answers }

        },

    })

</script>

<template>

    <div>

        <div>{{ localname }}</div>

        <el-table :data="answers">

            <el-table-column type="index" fixed width="50">
            </el-table-column>

            <el-table-column prop="id" fixed label="#" width="50">
            </el-table-column>

            <el-table-column prop="text" label="Ответ">
            </el-table-column>

            <el-table-column prop="isCorrect" label="Верный">
            </el-table-column>

            <el-table-column fixed='right' width='256'>
            </el-table-column>

        </el-table>

        <AnswerForm :question-id='questionId'></AnswerForm>

    </div>

</template>

<style scoped>

</style>
