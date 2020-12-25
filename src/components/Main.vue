<script lang="ts">

    import { Options, Vue } from 'vue-class-component'
    import { onMounted, ref } from 'vue'
    import { useStore } from 'vuex'
    import { paths } from '@/router/paths'

    @Options({

        name: 'Main',

        setup() {

            onMounted(() => { console.log('Main page is mounted') })

            const store = useStore()
            const count = ref(store.state.count)
            const test = 666

            return { count, store, increment: () => store.commit('increment'), test }

        },

    })
    class Main extends Vue {

        testButtonClick() { this.$router.push(paths.LOGIN) }

        testVuexButtonClick() { console.log('testVuexButtonClick') }

    }
    export default Main

</script>

<template>

    <div>

        <div>
            Main page
        </div>

        <div>
            {{ count }} {{ test }}
        </div>

        <el-button type="text" @click="testButtonClick">
            Test button
        </el-button>

        <el-button type="text" @click="testVuexButtonClick">
            Test Vuex
        </el-button>

    </div>

</template>

<style scoped>

</style>
