<script lang='ts'>

    import { defineComponent } from 'vue'

    const localname = 'Главная'

    export default defineComponent({

        name: 'Main',
        localname,

        setup() {
            return { localname }
        },

        methods: {
            mode() { return process.env.NODE_ENV },
        },

    })

</script>

<template>

    <div>

        <div>
            {{ localname }}
            <div>
                mode: {{ mode() }}
            </div>
        </div>

    </div>

</template>

<style scoped>

</style>
