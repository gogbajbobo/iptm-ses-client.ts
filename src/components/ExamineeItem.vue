<script lang='ts'>

    import { defineComponent, PropType } from 'vue'
    import { UserType } from '@/store/interfaces'

    export default defineComponent({

        name: 'ExamineeItem',

        props: {
            examinee: {
                type: Object as PropType<UserType>,
                required: true,
            }
        },

    })

</script>

<template>

    <div>
        {{ examinee.id }}
        {{ examinee.username }}
    </div>

</template>

<style scoped>

</style>
