<script lang='ts'>

    import { defineComponent, ref, PropType } from 'vue'
    import { useStore } from 'vuex'
    import * as answerStore from '@/store/answers/types'
    import { AnswerEmbryo, AnswerType } from '@/store/interfaces'
    import {showError} from '@/services/messages';

    export default defineComponent({

        name: 'AnswerForm',

        props: {
            questionId: { type: [ Number, String ] },
            answer: { type: Object as PropType<AnswerType> },
        },

        setup(props) {

            const store = useStore()

            const addAnswer = (answer: AnswerEmbryo) => {
                return store.dispatch(`answers/${ answerStore.Actions.ADD_ITEM }`, answer)
            }

            const answerText = ref(props.answer?.text || '')

            return { answerText, addAnswer }

        },

        methods: {

            saveFormData() {

                if (this.questionId) {

                    return this.addAnswer({ text: this.answerText, questionId: Number(this.questionId) })
                        .then(() => { this.answerText = '' })
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
