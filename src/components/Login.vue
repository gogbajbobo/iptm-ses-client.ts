<script lang="ts">

    import { defineComponent, computed } from 'vue'
    import { logger } from '@/services/logger'
    import { useStore } from 'vuex'
    import { showError } from '@/services/messages'
    import { ActionTypes, GetterTypes } from '@/store/auth/types'
    import { ElForm } from 'element-plus'

    export default defineComponent({

        name: 'Login',

        setup() {

            const store = useStore()
            const user = computed(() => store.getters[`auth/${ GetterTypes.USER }`])

            return {
                store,
                user,
            }

        },

        data() {
            return {
                busy: false,
                loginForm: {
                    username: null,
                    password: null,
                },
                rules: {
                    username: [
                        { required: true, message: 'Введите имя пользователя', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Введите пароль', trigger: 'blur' }
                    ]
                },
            }
        },

        methods: {

            login() { return this.store.dispatch(`auth/${ ActionTypes.LOGIN }`, this.loginForm).catch(showError) },

            submitForm() {

                this.busy = true

                const loginFormElement = this.$refs.loginForm as typeof ElForm
                loginFormElement.validate()
                    .then(this.login)
                    .catch((invalidFields: object) => logger.error(`login form validation fail: `, invalidFields))
                    .finally(() => { this.busy = false })

            },

        },

    })

</script>

<template>

    <el-form v-loading.fullscreen.lock="busy"
             :model="loginForm"
             @keyup.enter.native="submitForm"
             :rules="rules"
             class='login-form'
             ref='loginForm'>

        <el-form-item prop='username'>
            <el-input v-model.trim='loginForm.username' placeholder='Имя пользователя'></el-input>
        </el-form-item>

        <el-form-item prop='password'>
            <el-input v-model.trim='loginForm.password' placeholder='Пароль' type='password'></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="submitForm">Войти</el-button>
        </el-form-item>

        {{ user }}

    </el-form>

</template>

<style scoped>

    .login-form {
        width: 256px;
        margin: auto;
    }

</style>
