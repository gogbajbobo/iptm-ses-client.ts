<script lang='ts'>

    import { defineComponent, PropType, ref } from 'vue'
    import { useStore } from 'vuex'
    import * as questionStore from '@/store/questions/types'
    import { QuestionType } from '@/store/interfaces'
    import { showError } from '@/services/messages'

    export default defineComponent({

        name: 'QuestionForm',

        props: {
            section: {
                type: Number,
            },
            question: {
                type: Object as PropType<QuestionType>,
            },
        },

        setup(props) {

            const store = useStore()

            const addQuestion = (question: QuestionType) => {
                return store.dispatch(`questions/${ questionStore.Actions.ADD_ITEM }`, question)
            }

            const questionText: string = ref(props.question?.text || '')

            return {
                addQuestion,
                questionText,
            }

        },

        computed: {
            saveButtonDisabled() { return this.questionText.trim().length <= 0 },
        },

        methods: {

            saveFormData() {

                if (!this.question) {

                    this.addQuestion({ text: this.questionText, section: this.section })
                        .then(() => { this.questionText = '' })
                        .catch(err => showError(err, false))

                }

                const { id: questionId } = this.question

                console.log('update existing question', questionId)

            },

        },

    })

</script>

<template>

    <div>

        <el-input v-model='questionText' placeholder='Вопрос' type='textarea' class='question-input'></el-input>

        <div class='form-buttons'>

            <el-button type="primary" @click="saveFormData" :disabled='saveButtonDisabled'>Сохранить</el-button>

        </div>

    </div>

</template>

<style scoped>

    .question-input {
        width: 75%;
        margin: 10px auto;
    }

</style>
