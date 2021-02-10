<script lang="ts">

    import { defineComponent } from 'vue'
    import TheLayout from '@/components/common/TheLayout.vue'

    export default defineComponent({
        name: 'App',
        components: { TheLayout }
    })

</script>

<template>
    <TheLayout></TheLayout>
</template>

<style>

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    :root {

        --color-blue: #409EFF;
        --color-green: #67C23A;
        --color-gray: #909399;
        --color-ligth-gray: #E9E9EB;
        --color-yellow: #E6A23C;
        --color-ligth-yellow: #FDF6EC;
        --color-red: #F56C6C;

    }

</style>
