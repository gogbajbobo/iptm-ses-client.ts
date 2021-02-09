<script lang='ts'>

    import { defineComponent, PropType, ref } from 'vue'
    import { useStore } from 'vuex'
    import * as questionStore from '@/store/questions/types'
    import { QuestionEmbryo, QuestionType } from '@/store/interfaces'
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

            const addQuestion = (question: QuestionEmbryo) => {
                return store.dispatch(`questions/${ questionStore.Actions.ADD_ITEM }`, question)
            }

            const updateQuestion = (question: QuestionType) => {
                return store.dispatch(`questions/${ questionStore.Actions.UPDATE_ITEM }`, question)
            }

            const questionText = ref(props.question?.text || '')

            return {
                addQuestion,
                updateQuestion,
                questionText,
            }

        },

        methods: {

            saveFormData() {

                if (!this.question && this.section) {

                    return this.addQuestion({ text: this.questionText, sectionId: this.section })
                        .then(() => { this.questionText = '' })
                        .catch(err => showError(err, false))

                }

                if (this.question) {

                    const { id, sectionId } = this.question

                    return this.updateQuestion({
                        id,
                        sectionId,
                        text: this.questionText,
                    })
                        .then(() => { this.$emit('close-form') })
                        .catch(err => showError(err, false))

                }

                showError(new Error('either question or section should be set'))

            },

        },

    })

</script>

<template>

    <div>

        <el-input v-model='questionText'
                  placeholder='Вопрос'
                  type='textarea'
                  class='question-input'></el-input>

        <div>

            <el-button type="primary"
                       @click="saveFormData"
                       :disabled='questionText.trim().length <= 0'>
                Сохранить
            </el-button>

        </div>

    </div>

</template>

<style scoped>

    .question-input {
        width: 75%;
        margin: 10px auto;
    }

</style>
