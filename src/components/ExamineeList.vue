<script lang='ts'>

    import { defineComponent, computed } from 'vue'
    import { useStore } from 'vuex'
    import { ActionTypes, GetterTypes } from '@/store/examinees/types'

    const localname = 'Пользователи'

    export default defineComponent({

        name: 'ExamineeList',
        localname,

        setup() {

            const store = useStore()
            const examineeList = computed(() => store.getters[`examinees/${ GetterTypes.EXAMINEE_LIST }`])
            const getExamineeList = (() => store.dispatch(`examinees/${ ActionTypes.GET_EXAMINEES }`))()

            return {
                localname,
                examineeList,
                getExamineeList,
            }

        },

    })

</script>

<template>

    <div>
        {{ localname }}
    </div>

</template>

<style scoped>

</style>
