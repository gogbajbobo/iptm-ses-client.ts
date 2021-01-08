<script lang='ts'>

    import { defineComponent, PropType } from 'vue'
    import { UserType } from '@/store/interfaces'

    export default defineComponent({

        name: 'ExamineeForm',

        props: {
            examinee: {
                type: Object as PropType<UserType>,
                required: true,
            }
        }

    })

</script>

<template>

    <div>
        {{ examinee }}
    </div>

</template>

<style scoped>

</style>
