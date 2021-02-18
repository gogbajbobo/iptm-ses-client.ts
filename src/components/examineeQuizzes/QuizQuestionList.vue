<script lang='ts'>

    // TODO: have to check are questions from quiz request
    import { defineComponent, computed } from 'vue'
    import { questions } from '@/store/helper'

    const localname = 'Вопросы экзамена'

    export default defineComponent({

        name: 'QuizQuestionList',
        localname,

        setup() {

            return {
                localname,
                questions: computed(questions),
            }

        },

    })

</script>

<template>

    <div>

        <div>{{ localname }}</div>

        <el-table :data='questions'>

            <el-table-column type="index" fixed width="50">
            </el-table-column>

            <el-table-column prop="id" fixed label="#" width="50">
            </el-table-column>

            <el-table-column prop="text" label="Вопрос">
            </el-table-column>

        </el-table>

    </div>

</template>

<style scoped>

</style>
