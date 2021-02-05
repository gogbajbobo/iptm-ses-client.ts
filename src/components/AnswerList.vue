<script lang='ts'>

    import { defineComponent } from 'vue'

    export default defineComponent({

        name: 'AnswerList',

        props: {
            questionId: { type: [ Number, String ], required: true },
        },

    })

</script>

<template>

    <div>
        AnswerList {{ questionId }}
    </div>

</template>

<style scoped>

</style>
