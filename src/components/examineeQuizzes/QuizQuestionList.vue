<script lang='ts'>

    import { defineComponent } from 'vue'

    const localname = 'Вопросы экзамена'

    export default defineComponent({

        name: 'QuizQuestionList',
        localname,

        setup() {
            return { localname }
        },

    })

</script>

<template>

    <div>

        <div>{{ localname }}</div>

    </div>

</template>

<style scoped>

</style>
