<script lang='ts'>

    import { defineComponent, computed } from 'vue'
    import { useStore } from 'vuex'
    import * as testStore from '@/store/test/types'
    import * as authStore from '@/store/auth/types'
    import { logger } from '@/services/logger'
    import { showError } from '@/services/messages'

    export default defineComponent({

        name: 'Main',

        setup() {

            const store = useStore()
            const count = computed(() => store.getters[`test/${ testStore.GetterTypes.COUNTER }`])
            const test = 666

            return { count, store, test }

        },

        methods: {

            logoutButtonClick() {
                return this.store.dispatch(`auth/${ authStore.ActionTypes.LOGOUT }`).catch(showError)
            },

            testVuexPlusButtonClick() {
                this.store.dispatch(`test/${ testStore.ActionTypes.INCREMENT_COUNTER }`)
                    .then(data => logger.log(`action complete: ${ data }`))
                    .catch(logger.error)
            },

            testVuexMinusButtonClick() { this.store.commit(`test/${ testStore.MutationTypes.DECREMENT_COUNTER }`) },

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

        <el-button type="primary" @click="logoutButtonClick">
            Выйти
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
