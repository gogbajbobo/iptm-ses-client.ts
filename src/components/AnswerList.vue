<script lang='ts'>

    import { defineComponent } from 'vue'
    import { useStore } from 'vuex'
    import * as answerStore from '@/store/answers/types'

    export default defineComponent({

        name: 'AnswerList',

        props: {
            questionId: { type: [ Number, String ], required: true },
        },

        setup(props) {

            const store = useStore()

            const answers = store.getters[`answers/${ answerStore.Getters.ITEM_LIST }`]

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
    </div>

</template>

<style scoped>

</style>
