<script lang='ts'>

    import { defineComponent, computed } from 'vue'
    import { useStore } from 'vuex'
    import { ActionTypes, GetterTypes } from '@/store/examinees/types'

    const localname = 'Пользователи'

    export default defineComponent({

        name: 'ExamineeList',
        localname,

        setup() {

            const store = useStore()
            const examinees = computed(() => store.getters[`examinees/${ GetterTypes.EXAMINEE_LIST }`])
            const getExaminees = (() => {
                store.dispatch(`examinees/${ ActionTypes.GET_EXAMINEES }`).catch(() => {})
            })()

            return {
                localname,
                examinees,
                getExaminees,
            }

        },

    })

</script>

<template>

    <div>

        <div>
            {{ localname }}
        </div>

        <el-table :data="examinees">

            <el-table-column
                type="index"
                width="50">
            </el-table-column>

            <el-table-column
                prop="id"
                label="#"
                width="180">
            </el-table-column>

            <el-table-column
                prop="username"
                label="Имя">
            </el-table-column>

        </el-table>

    </div>

</template>

<style scoped>

</style>
