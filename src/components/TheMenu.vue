<script lang='ts'>

    import { defineComponent } from 'vue'
    import { paths } from '@/router/paths'
    import { UserRole } from '@/services/constants'

    export default defineComponent({

        name: 'TheMenu',

        data() {
            return {
                menuItems: [
                    { title: 'Главная', command: paths.MAIN },
                    { title: 'Пользователи', command: paths.EXAMINEE_LIST, roles: [ UserRole.EXAMINER ] }
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
        <el-button type="primary">
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
