<script lang='ts'>

    import { defineComponent } from 'vue'

    const localname = 'Новое тестирование'

    export default defineComponent({

        name: 'QuizCreate',
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
