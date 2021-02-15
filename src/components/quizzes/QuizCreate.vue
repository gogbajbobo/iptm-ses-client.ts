<script lang='ts'>

    import { defineComponent, computed } from 'vue'
    import { getExams, exams, getSections, sections, getExaminees, examinees, addQuiz } from '@/store/helper'
    import { paths } from '@/router/paths'
    import { UserType } from '@/store/interfaces'
    import { showAlert } from '@/services/messages'

    const localname = 'Новое тестирование'

    export default defineComponent({

        name: 'QuizCreate',
        localname,

        props: {
            examId: { type: [ Number, String ], required: true },
        },

        data() {
            return {
                examineeSelection: [] as UserType[],
            }
        },

        setup(props) {

            const exam = computed(() => computed(exams).value?.find(e => e.id === Number(props.examId)))

            const categories = computed(() => computed(sections).value?.map(s => s.category))
            const categoryIds = computed(() => computed(sections).value?.map(s => s.category.id))

            Promise.all([
                getExams(),
                getSections({ exam: props.examId })
            ])
                .then(() => getExaminees({ categories: categoryIds.value.join(',') }))
                .catch(() => {})

            return {
                localname,
                exam,
                categories,
                examinees: computed(examinees),
            }

        },

        methods: {

            backToListButtonClicked() { this.$router.push(paths.QUIZ_LIST) },

            examineeSelectionChange(selection: UserType[]) {
                this.examineeSelection = selection
            },

            createQuiz() {

                if (!this.examineeSelection.length)
                    return showAlert('Не выбраны пользователи', 'Ошибка!')

                return addQuiz({
                    exam: Number(this.examId),
                    examinees: this.examineeSelection.map(e => Number(e.id)),
                })
                    .catch(() => {})

            },

            categoriesString(examinee: UserType) {
                return examinee.categories.map(category => category.title).join(',')
            },

        },

    })

</script>

<template>

    <div>

        <div>{{ localname }}</div>

        <template v-if='exam'>

            <div>Экзамен: {{ exam.title }}</div>
            <div>Категории:</div>
            <div v-for='category in categories' :key='category.id'>{{ category.title }}</div>
            <el-divider></el-divider>

            <div>
                <el-table :data='examinees' @selection-change="examineeSelectionChange">

                    <el-table-column type="selection" width="55">
                    </el-table-column>

                    <el-table-column prop="username" label='Имя пользователя'>
                    </el-table-column>

                    <el-table-column label="Категории">

                        <template #default="scope">
                            {{ categoriesString(scope.row) }}
                        </template>

                    </el-table-column>

                </el-table>
            </div>

        </template>

        <template v-else>
            <el-alert title='Неизвестный экзамен' type='error' center show-icon :closable='false'></el-alert>
        </template>

        <div>

            <el-button type='primary'
                       @click='createQuiz'
                       class='create-quiz-button'>Создать тестирование</el-button>

        </div>

        <el-button type='text'
                   @click='backToListButtonClicked'
                   class='back-to-list-link'>К списку тестов</el-button>

    </div>

</template>

<style scoped>

    .create-quiz-button {
        margin: 32px;
    }

    .back-to-list-link {
        /*margin: 16px;*/
    }

</style>
