<script lang='ts'>

    import { defineComponent } from 'vue'

    export default defineComponent({

        name: 'TheLayout',

    })

</script>

<template>

    <div>
        <img alt="Vue logo" src="../assets/logo.png" class='logo-image'>
        <router-view></router-view>
    </div>

</template>

<style scoped>

    .logo-image {
        margin-top: 24px;
        margin-bottom: 24px;
    }

</style>
