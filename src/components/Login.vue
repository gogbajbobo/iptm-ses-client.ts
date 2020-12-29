<script lang="ts">

    import { defineComponent } from 'vue'
    import { logger } from '@/services/logger'
    import * as Messages from '@/services/messages'
    import { useStore } from 'vuex'
    import { ActionTypes } from '@/store/auth/types'
    import { ElForm } from 'element-plus'

    export default defineComponent({

        name: 'Login',

        setup() {

            return {
                store: useStore(),
            }

        },

        data() {
            return {
                busy: false,
                loginForm: {
                    login: null,
                    password: null,
                },
                rules: {
                    login: [
                        { required: true, message: 'Введите имя пользователя', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Введите пароль', trigger: 'blur' }
                    ]
                },
            }
        },

        methods: {

            submitForm() {

                const loginForm = this.$refs.loginForm as typeof ElForm
                loginForm.validate()
                    .then(() => {

                        this.busy = true

                        return this.store.dispatch(`auth/${ ActionTypes.LOGIN }`, loginForm)
                            .catch(Messages.showError)

                    })
                    .catch((invalidFields: object) => logger.error(`login form validation fail: `, invalidFields))
                    .then(() => { this.busy = false })

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

        <el-form-item prop='login'>
            <el-input v-model.trim='loginForm.login' placeholder='Имя пользователя'></el-input>
        </el-form-item>

        <el-form-item prop='password'>
            <el-input v-model.trim='loginForm.password' placeholder='Пароль' type='password'></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="submitForm">Войти</el-button>
        </el-form-item>

    </el-form>

</template>

<style scoped>

    .login-form {
        width: 256px;
        margin: auto;
    }

</style>
