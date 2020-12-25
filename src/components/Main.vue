<script>

    import { onMounted } from 'vue'
    import { paths } from '@/router/paths'

    export default {

        name: 'Main',

        setup() {

            onMounted(() => { console.log('Main page is mounted') })

        },

        methods: {
            testButtonClick() { this.$router.push(paths.LOGIN) }
        },

    }

</script>

<template>

    <div>
        Main page
    </div>

    <el-button type="text" @click="testButtonClick">
        Test button
    </el-button>

</template>

<style scoped>

</style>
