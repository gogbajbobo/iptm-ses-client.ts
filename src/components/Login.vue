<script lang="ts">

    import { Options, Vue } from 'vue-class-component'
    import { onMounted } from 'vue'
    import { paths } from '@/router/paths'

    @Options({

        name: 'Login',

        setup() {

            onMounted(() => { console.log('Login page is mounted') })

        },

    })
    class Login extends Vue {
        backButtonClick() { this.$router.push(paths.MAIN)}
    }
    export default Login

</script>

<template>

    <div>

        <div>
            Login page
        </div>

        <el-button type="text" @click="backButtonClick">Back to Main</el-button>

    </div>

</template>

<style scoped>

</style>
