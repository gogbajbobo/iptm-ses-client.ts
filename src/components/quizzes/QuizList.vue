<script lang='ts'>

    import { defineComponent } from 'vue'

    const localname = 'Тестирование'

    export default defineComponent({

        name: 'QuizList',
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
