<script lang='ts'>

    import { defineComponent, computed } from 'vue'
    import { store } from '@/store'
    import * as authStore from '@/store/auth/types'
    import { showError } from '@/services/messages'
    import { currentUser } from '@/services/helper'

    export default defineComponent({

        name: 'TheHeader',

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
        <h3>Экзамены по охране труда и технике безопасности</h3>
        <span>{{ user.username }}</span>
        <el-button type="danger" size='mini' @click="logoutButtonClick" class='logout-button'>
            Выйти
        </el-button>
    </div>

</template>

<style scoped>

    .logout-button {
        margin-left: 12px;
    }

</style>
