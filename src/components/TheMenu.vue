<script lang='ts'>

    import { defineComponent, computed } from 'vue'
    import { routes } from '@/router/routes'
    import components from '@/components'
    import { currentUser, checkRoles } from '@/services/helper'

    const { Main, ExamineeList, CategoryList, ExamList } = components

    export default defineComponent({

        name: 'TheMenu',

        setup() {

            const menuItem = (component: any) => {

                const route = routes.find(r => r.component === component)
                if (!route)
                    return null

                return {
                    title: component.localname,
                    command: route.path,
                    roles: route.meta?.requireRoles,
                }

            }

            const menuItems = [
                Main,
                ExamineeList,
                CategoryList,
                ExamList
            ].map(menuItem)

            const user = computed(() => currentUser())

            const userMenuItems = computed(
                () => menuItems.filter((item: any) => checkRoles(user.value, item.roles))
            )

            return {
                userMenuItems
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

                <el-dropdown-item v-for='item in userMenuItems'
                                  :key='item.title'
                                  divided
                                  :command='item.command'>{{ item.title }}</el-dropdown-item>

            </el-dropdown-menu>
        </template>
    </el-dropdown>

</template>

<style scoped>

</style>
