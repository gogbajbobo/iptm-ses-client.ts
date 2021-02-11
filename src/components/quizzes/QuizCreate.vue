<script lang='ts'>

    import { defineComponent, computed } from 'vue'
    import { sections, getSections, categories, getExaminees, examinees } from '@/store/helper'
    import { paths } from '@/router/paths'
    import { sortBy } from 'lodash'
    import { SectionType, UserType } from '@/store/interfaces'

    const localname = 'Новое тестирование'

    export default defineComponent({

        name: 'QuizCreate',
        localname,

        props: {
            categoryId: { type: [ Number, String ] },
        },

        data() {
            return {
                sectionSelection: [] as SectionType[],
                examineeSelection: [] as UserType[],
            }
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

            backToListButtonClicked() { this.$router.push(paths.QUIZ_LIST) },

            sectionSelectionChange(selection: SectionType[]) {
                this.sectionSelection = selection
            },

            examineeSelectionChange(selection: UserType[]) {
                this.examineeSelection = selection
            },

        },

    })

</script>

<template>

    <div>

        <div>{{ localname }}</div>

        <template v-if='category'>
            <div>Категория: {{ category.title }}</div>
            <div>
                <el-table :data='sections' @selection-change="sectionSelectionChange">

                    <el-table-column type="selection" width="55">
                    </el-table-column>

                    <el-table-column prop="exam.title" label='Экзамен'>
                    </el-table-column>

                    <el-table-column prop="title" label='Раздел'>
                    </el-table-column>

                </el-table>
            </div>

            <el-divider></el-divider>

            <div>
                <el-table :data='examinees' @selection-change="examineeSelectionChange">

                    <el-table-column type="selection" width="55">
                    </el-table-column>

                    <el-table-column prop="username" label='Имя пользователя'>
                    </el-table-column>

                </el-table>
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
