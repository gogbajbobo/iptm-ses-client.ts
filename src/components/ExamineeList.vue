<script lang='ts'>

    import { defineComponent, computed } from 'vue'
    import { useStore } from 'vuex'
    import { ActionTypes, GetterTypes } from '@/store/examinees/types'
    import ExamineeItem from '@/components/ExamineeItem.vue'

    const localname = 'Пользователи'

    export default defineComponent({

        name: 'ExamineeList',
        localname,

        components: { ExamineeItem },

        setup() {

            const store = useStore()
            const examinees = computed(() => store.getters[`examinees/${ GetterTypes.EXAMINEE_LIST }`])
            const getExaminees = (() => {
                store.dispatch(`examinees/${ ActionTypes.GET_EXAMINEES }`).catch(() => {})
            })()

            return {
                localname,
                examinees,
                getExaminees,
            }

        },

    })

</script>

<template>

    <div>

        {{ localname }}

        <ExamineeItem v-for='examinee in examinees' :key='examinee.id' :examinee='examinee'></ExamineeItem>

    </div>

</template>

<style scoped>

</style>
