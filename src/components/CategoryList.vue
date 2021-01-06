<script lang='ts'>

    import { defineComponent } from 'vue'

    const localname = 'Категории'

    export default defineComponent({

        name: 'CategoryList',
        localname,

        setup() {
            return { localname }
        }

    })

</script>

<template>

    <div>

        {{ localname }}

    </div>

</template>

<style scoped>

</style>
