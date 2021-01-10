<script lang='ts'>

    import { defineComponent } from 'vue'

    const localname = 'Разделы экзамена'

    export default defineComponent({

        name: 'SectionList',
        localname,

        props: {
            examId: {
                type: Number,
                required: true,
            }
        },

        setup() {
            return { localname }
        },

    })

</script>

<template>

    <div>

        <div>{{ localname }} {{ examId }}</div>

    </div>

</template>

<style scoped>

</style>
