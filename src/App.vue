<script lang="ts">

    import { Options, Vue } from 'vue-class-component'

    @Options({})
    class App extends Vue {}
    export default App

</script>

<template>

    <div>

        <img alt="Vue logo" src="./assets/logo.png">
        <router-view></router-view>

    </div>

</template>

<style>

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

</style>
