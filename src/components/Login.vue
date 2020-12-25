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
    export default class Login extends Vue {
        backButtonClick() { this.$router.push(paths.MAIN)}
    }

</script>

<template>

    <div>
        Login page
    </div>

    <el-button type="text" @click="backButtonClick">Back to Main</el-button>

</template>

<style scoped>

</style>
