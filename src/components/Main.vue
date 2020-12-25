<script lang="ts">

    import { Options, Vue } from 'vue-class-component'
    import { onMounted } from 'vue'
    import { paths } from '@/router/paths'

    @Options({

        name: 'Main',

        setup() {
            onMounted(() => { console.log('Main page is mounted') })
        },

    })
    export default class Main extends Vue {
        testButtonClick() { this.$router.push(paths.LOGIN) }
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
