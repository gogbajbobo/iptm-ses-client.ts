<script lang='ts'>

    import { defineComponent, computed } from 'vue'
    import { sections, getSections, categories, getExaminees, examinees } from '@/store/helper'
    import { paths } from '@/router/paths'
    import { sortBy } from 'lodash'

    const localname = 'Новое тестирование'

    export default defineComponent({

        name: 'QuizCreate',
        localname,

        props: {
            categoryId: { type: [ Number, String ] },
        },

        setup(props) {

            const category = categories().find(c => c.id === Number(props.categoryId))

            if (category) {

                const params = { category: category.id }

                Promise.all([
                    getSections(params),
                    getExaminees(params)
                ])
                    .catch(() => {})

            }

            return {
                localname,
                category,
                sections: computed(() => sortBy(sections(), [ 'examId' ])),
                examinees: computed(examinees),
            }

        },

        methods: {
            backToListButtonClicked() { this.$router.push(paths.QUIZ_LIST) }
        },

    })

</script>

<template>

    <div>

        <div>{{ localname }}</div>

        <template v-if='category'>
            <div>Категория: {{ category.title }}</div>
            <div>
                <el-table :data='sections'>

                    <el-table-column prop="exam.title" label='Экзамен'>
                    </el-table-column>

                    <el-table-column prop="title" label='Раздел'>
                    </el-table-column>

                </el-table>
            </div>
            <br>
            <div>
                <div v-for='examinee in examinees' :key='examinee.id'>{{ examinee }}</div>
            </div>
        </template>

        <template v-else>
            <el-alert title='Неизвестная категория' type='error' center show-icon :closable='false'></el-alert>
        </template>

        <el-button type='text'
                   @click='backToListButtonClicked'
                   class='back-to-list-link'>К списку тестов</el-button>

    </div>

</template>

<style scoped>

    .back-to-list-link {
        margin: 16px;
    }

</style>
