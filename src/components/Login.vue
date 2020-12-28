<script lang="ts">

    import { defineComponent, onMounted } from 'vue'
    import { paths } from '@/router/paths'

    export default defineComponent({

        name: 'Login',

        setup() {

            onMounted(() => { console.log('Login page is mounted') })

        },

        methods: {
            backButtonClick() { this.$router.push(paths.MAIN)}
        },

    })

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
