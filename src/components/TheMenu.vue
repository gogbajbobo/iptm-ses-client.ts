<script lang='ts'>

import {defineComponent} from 'vue'
import {paths} from '@/router/paths'
import {UserRole} from '@/services/constants'
import components from '@/components'

const { Main, ExamineeList, CategoryList } = components

    export default defineComponent({

        name: 'TheMenu',

        data() {
            return {
                menuItems: [
                    { title: Main.localname, command: paths.MAIN },
                    { title: ExamineeList.localname, command: paths.EXAMINEE_LIST, roles: [ UserRole.EXAMINER ] },
                    { title: CategoryList.localname, command: paths.CATEGORY_LIST, roles: [ UserRole.EXAMINER ] },
                ]
            }
        },

        setup() {

            return {
                paths
            }

        },

        methods: {
            menuItemClick(path: string) {
                this.$router.push({ path })
            }
        },

    })

</script>

<template>

    <el-dropdown @command='menuItemClick' placement='bottom-start'>
        <el-button size='mini'>
            Меню
        </el-button>
        <template #dropdown>
            <el-dropdown-menu>

                <el-dropdown-item v-for='item in menuItems'
                                  :key='item.title'
                                  :command='item.command'>{{ item.title }}</el-dropdown-item>

            </el-dropdown-menu>
        </template>
    </el-dropdown>

</template>

<style scoped>

</style>
