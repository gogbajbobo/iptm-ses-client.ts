<script>

    export default {

        name: 'QuestionForm',

        data() {
            return {
                questionText: '',
            }
        },

        methods: {

            saveFormData() { console.log('saveFormData') },

        },

    }

</script>

<template>

    <div>

        <el-input v-model='questionText' placeholder='Вопрос' type='textarea' class='question-input'></el-input>

        <div class='form-buttons'>

            <el-button type="primary" @click="saveFormData">Сохранить</el-button>

        </div>

    </div>

</template>

<style scoped>

    .question-input {
        width: 75%;
        margin: 10px auto;
    }

</style>
