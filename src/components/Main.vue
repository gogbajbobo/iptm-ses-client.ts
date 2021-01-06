<script lang='ts'>

    import { defineComponent } from 'vue'

    const localname = 'Главная'

    export default defineComponent({

        name: 'Main',
        localname,

        setup() {
            return { localname }
        },

        methods: {},

    })

</script>

<template>

    <div>

        <div>
            {{ localname }}
        </div>

    </div>

</template>

<style scoped>

</style>
