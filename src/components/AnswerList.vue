<script lang='ts'>

    import { defineComponent, computed } from 'vue'
    import { useStore } from 'vuex'
    import * as answerStore from '@/store/answers/types'

    import AnswerForm from '@/components/AnswerForm.vue'

    export default defineComponent({

        name: 'AnswerList',

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

            return { answers }

        },

    })

</script>

<template>

    <div>

        AnswerList {{ questionId }}
        {{ answers }}

        <AnswerForm :question-id='questionId'></AnswerForm>

    </div>

</template>

<style scoped>

</style>
