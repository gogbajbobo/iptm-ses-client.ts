<script lang='ts'>

    import { defineComponent, computed } from 'vue'
    import { store } from '@/store'
    import * as authStore from '@/store/auth/types'
    import { showError } from '@/services/messages'
    import { currentUser } from '@/store/helper'
    import TheMenu from '@/components/common/TheMenu.vue'

    export default defineComponent({

        name: 'TheHeader',

        components: { TheMenu },

        setup() {
            return {
                user: computed(currentUser)
            }
        },

        methods: {
            logoutButtonClick() {
                return store.dispatch(`auth/${ authStore.ActionTypes.LOGOUT }`).catch(showError)
            },
        },

    })

</script>

<template>

    <div>

        <div class='menu-button'>
            <TheMenu></TheMenu>
        </div>

        <h3>Экзамены по охране труда и технике безопасности</h3>

        <div class='user-block'>

            <span>{{ user.username }}</span>
            <el-button type="danger" size='mini' @click="logoutButtonClick" class='logout-button'>
                Выйти
            </el-button>

        </div>

        <el-divider></el-divider>

    </div>

</template>

<style scoped>

    .menu-button {
        position: fixed;
        left: 24px;
        top: 16px;
    }

    .user-block {
        position: fixed;
        top: 16px;
        right: 24px;
    }

    .logout-button {
        margin-left: 12px;
    }

</style>
