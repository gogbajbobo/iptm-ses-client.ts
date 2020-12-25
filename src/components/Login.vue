<script>

    import { onMounted } from 'vue'
    import { paths } from '@/router/paths'

    export default {

        name: 'Login',

        setup() {

            onMounted(() => { console.log('Login page is mounted') })

        },

        methods: {
            backButtonClick() { this.$router.push(paths.MAIN)}
        },

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
