<script lang="ts">

    import { defineComponent } from 'vue'
    import TheLayout from '@/components/TheLayout.vue'

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

</style>
