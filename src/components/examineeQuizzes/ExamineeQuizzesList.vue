<script lang='ts'>

    import { defineComponent, computed } from 'vue'
    import { getQuizzes, quizzes } from '@/store/helper'

    const localname = 'Список экзаменов'

    export default defineComponent({

        name: 'ExamineeQuizzesList',
        localname,

        setup() {

            getQuizzes().catch(() => {})

            return {
                localname,
                quizzes: computed(quizzes),
            }

        },

    })

</script>

<template>

    <div>

        <div>{{ localname }}</div>

        <el-table :data='quizzes'>

            <el-table-column type="index" fixed width="50">
            </el-table-column>

            <el-table-column prop="id" fixed label="#" width="50">
            </el-table-column>

            <el-table-column prop="exam.title" fixed label="Экзамен">
            </el-table-column>

        </el-table>

    </div>

</template>

<style scoped>

</style>
