<script lang="ts">

    import { onMounted, defineComponent, computed } from 'vue'
    import { useStore } from 'vuex'
    import { paths } from '@/router/paths'
    import { logger } from '@/services/logger'

    export default defineComponent({

        name: 'Main',

        setup() {

            onMounted(() => { logger.log('Main page is mounted') })

            const store = useStore()
            const count = computed(() => store.state.count)
            const test = 666

            return { count, store, test }

        },

        methods: {

            testButtonClick() { this.$router.push(paths.LOGIN) },

            testVuexButtonClick() { this.store.commit('increment') },

        },

    })

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
