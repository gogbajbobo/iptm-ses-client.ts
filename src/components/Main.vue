<script>

    import { onMounted } from 'vue'

    export default {

        name: 'Main',

        setup() {

            onMounted(() => { console.log('Main page is mounted') })

        },

        methods: {

        },

    }

</script>

<template>

    <div>
        Main page
    </div>

    <el-button type="text">
        Test button
    </el-button>

</template>

<style scoped>

</style>
