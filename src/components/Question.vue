<script lang='ts'>

    import { defineComponent } from 'vue'

    export default defineComponent({

        name: 'Question',

        props: {
            questionId: {
                type: [ Number, String ],
                required: true,
            },
        },

    })

</script>

<template>

    <div>
        Question {{ questionId }}
    </div>

</template>

<style scoped>

</style>
