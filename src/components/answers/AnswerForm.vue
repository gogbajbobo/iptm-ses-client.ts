<script lang='ts'>

    import { defineComponent, ref, PropType } from 'vue'
    import { addAnswer, updateAnswer } from '@/store/helper'
    import { AnswerType } from '@/store/interfaces'
    import { showError } from '@/services/messages'

    export default defineComponent({

        name: 'AnswerForm',

        props: {
            questionId: { type: [ Number, String ] },
            answer: { type: Object as PropType<AnswerType> },
        },

        setup(props) {

            const answerText = ref(props.answer?.text || '')

            return { answerText }

        },

        methods: {

            saveFormData() {

                if (!this.answer && this.questionId) {

                    return addAnswer({ text: this.answerText, question: Number(this.questionId) })
                        .then(() => { this.answerText = '' })
                        .catch(err => showError(err, false))

                }

                if (this.answer) {

                    // console.log(this.answer)

                    return updateAnswer({
                        ...this.answer,
                        text: this.answerText,
                    })
                        .then(() => { this.$emit('close-form') })
                        .catch(err => showError(err, false))

                }

                showError(new Error('either answer or questionId should be set'))

            },

        },

    })

</script>

<template>

    <div>

        <el-input v-model='answerText'
                  placeholder='Ответ'
                  type='textarea'
                  class='answer-input'></el-input>

        <div>

            <el-button type="primary"
                       @click="saveFormData"
                       :disabled='answerText.trim().length <= 0'>
                Сохранить
            </el-button>

        </div>

    </div>

</template>

<style scoped>

    .answer-input {
        width: 75%;
        margin: 10px auto;
    }

</style>
