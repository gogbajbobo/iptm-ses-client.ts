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

    })

</script>

<template>

    <div>

        <div>{{ localname }}</div>
        {{ questions }}

        <QuestionForm :section='sectionId'></QuestionForm>

    </div>

</template>

<style scoped>

</style>
