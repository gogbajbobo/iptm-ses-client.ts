<script lang='ts'>

    import { defineComponent, computed, ref } from 'vue'
    import { getExaminees, examinees } from '@/store/helper'
    import { UserType } from '@/store/interfaces'
    import ExamineeForm from '@/components/examinees/ExamineeForm.vue'

    const localname = 'Пользователи'

    export default defineComponent({

        name: 'ExamineeList',
        localname,

        components: { ExamineeForm },

        setup() {

            getExaminees().catch(() => {})

            let examineeFormVisible = ref(false)
            let selectedExaminee: any = null

            return {
                localname,
                examinees: computed(examinees),
                examineeFormVisible,
                selectedExaminee,
            }

        },

        methods: {

            editExamineeButtonPressed(examinee: UserType) {

                this.selectedExaminee = examinee
                this.examineeFormVisible = true

            },

            closeExamineeForm() {

                this.examineeFormVisible = false
                // this.selectedExaminee = null

            },

            rolesString(examinee: UserType) {
                return examinee.roles.join(', ')
            },

            categoriesString(examinee: UserType) {
                return examinee.categories.map(category => category.title).join(',')
            },

        },

    })

</script>

<template>

    <div>

        <div>
            {{ localname }}
        </div>

        <el-table :data="examinees">

            <el-table-column type="index" width="50">
            </el-table-column>

            <el-table-column prop="id" label="#" width="180">
            </el-table-column>

            <el-table-column prop="username" label="Имя">
            </el-table-column>

            <el-table-column label="Роли">

                <template #default="scope">
                    {{ rolesString(scope.row) }}
                </template>

            </el-table-column>

            <el-table-column label="Категории">

                <template #default="scope">
                    {{ categoriesString(scope.row) }}
                </template>

            </el-table-column>

            <el-table-column>
                <template #default="scope">

                    <el-button type='warning'
                               plain
                               @click='editExamineeButtonPressed(scope.row)'>Редактировать</el-button>

                </template>
            </el-table-column>

        </el-table>

        <el-dialog title="Пользователь"
                   :model-value="examineeFormVisible"
                   @closed='closeExamineeForm'
                   :destroy-on-close='true'
                   width="30%">

            <ExamineeForm :examinee='selectedExaminee' @close-form='closeExamineeForm'></ExamineeForm>

        </el-dialog>

    </div>

</template>

<style scoped>

</style>
