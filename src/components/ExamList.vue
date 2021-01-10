<script lang='ts'>

    import { defineComponent } from 'vue'

    const localname = 'Экзамены'

    export default defineComponent({

        name: 'ExamList',
        localname,

        setup() {
            return { localname }
        },

    })

</script>

<template>

    <div>
        {{ localname }}
    </div>

</template>

<style scoped>

</style>
