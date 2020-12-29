<script lang='ts'>

    import { onMounted, defineComponent, computed } from 'vue'
    import { useStore } from 'vuex'
    import { MutationTypes, ActionTypes, GetterTypes } from '@/store/test/types'
    import { paths } from '@/router/paths'
    import { logger } from '@/services/logger'

    export default defineComponent({

        name: 'Main',

        setup() {

            onMounted(() => { logger.log('Main page is mounted') })

            const store = useStore()
            const count = computed(() => store.getters[`test/${ GetterTypes.COUNTER }`])
            const test = 666

            return { count, store, test }

        },

        methods: {

            testButtonClick() { this.$router.push(paths.LOGIN) },

            testVuexPlusButtonClick() {
                this.store.dispatch(`test/${ ActionTypes.INCREMENT_COUNTER }`)
                    .then(data => logger.log(`action complete: ${ data }`))
                    .catch(logger.error)
            },

            testVuexMinusButtonClick() { this.store.commit(`test/${ MutationTypes.DECREMENT_COUNTER }`) },

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

        <el-button type="text" @click="testVuexPlusButtonClick">
            + Vuex
        </el-button>

        <el-button type="text" @click="testVuexMinusButtonClick">
            - Vuex
        </el-button>

    </div>

</template>

<style scoped>

</style>
