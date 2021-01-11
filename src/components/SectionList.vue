<script lang='ts'>

    import { defineComponent, computed } from 'vue'
    import { useStore } from 'vuex'
    import * as sectionStore from '@/store/sections/types'

    const localname = 'Разделы экзамена'

    export default defineComponent({

        name: 'SectionList',
        localname,

        props: {
            examId: {
                type: Number,
                required: true,
            }
        },

        setup(props) {

            const store = useStore()

            const sections = computed(() => store.getters[`sections/${ sectionStore.Getters.ITEM_LIST }`])

            const getSections = () => {

                return store.dispatch(
                    `sections/${ sectionStore.Actions.GET_ITEMS }`,
                    { exam: props.examId }
                    )

            }

            getSections().catch(() => {})

            return { localname, sections }

        },

    })

</script>

<template>

    <div>

        <div>{{ localname }} {{ examId }}</div>
        <div>{{ sections }}</div>

    </div>

</template>

<style scoped>

</style>
