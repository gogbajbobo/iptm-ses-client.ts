<script lang='ts'>

    import { defineComponent } from 'vue'
    import { store } from '@/store'
    import { GetterTypes as authGetters } from '@/store/auth/types'

    export default defineComponent({

        name: 'TheHeader',

        setup() {
            return {
                user: store.getters[`auth/${ authGetters.USER }`]
            }
        },

    })

</script>

<template>

    <div>
        <h3>Экзамены по охране труда и технике безопасности</h3>
        <span>{{ user.username }}</span>
    </div>

</template>

<style scoped>

</style>
