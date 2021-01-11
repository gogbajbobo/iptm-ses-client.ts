<script lang='ts'>

    import { defineComponent } from 'vue'
    import { isAuthenticated } from '@/services/helper'
    import TheHeader from '@/components/common/TheHeader.vue'

    export default defineComponent({

        name: 'TheLayout',

        components: { TheHeader },

        setup() {
            return { isAuthenticated }
        },

    })

</script>

<template>

    <div>
        <template v-if='isAuthenticated()'>
            <TheHeader></TheHeader>
        </template>

        <template v-else>

            <div class='main-logo'>

                <img alt="Vue logo" src="../../assets/logo.png" class='logo-image'>
                <div>
                    <h3>Экзамены по охране труда и технике безопасности</h3>
                </div>

            </div>

        </template>

        <router-view></router-view>

    </div>

</template>

<style scoped>

    .logo-image {
        margin-top: 24px;
        margin-bottom: 24px;
    }

    .main-logo {
        margin-bottom: 24px;
    }

</style>
