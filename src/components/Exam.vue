<script lang='ts'>

import {defineComponent, PropType} from 'vue'
import { ExamType } from '@/store/interfaces'

    const localname = 'Экзамен'

    export default defineComponent({

        name: 'Exam',
        localname,

        props: {
            examId: {
                type: [ Number, String ],
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
