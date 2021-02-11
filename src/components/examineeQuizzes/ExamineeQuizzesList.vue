<script lang='ts'>

    import { defineComponent } from 'vue'

    const localname = 'Список экзаменов'

    export default defineComponent({

        name: 'ExamineeQuizzesList',
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
