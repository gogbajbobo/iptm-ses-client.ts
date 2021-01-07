<script lang='ts'>

    import { defineComponent, computed } from 'vue'
    import { useStore } from 'vuex'
    import { ActionTypes, GetterTypes } from '@/store/categories/types'

    const localname = 'Категории'

    export default defineComponent({

        name: 'CategoryList',
        localname,

        setup() {

            const store = useStore()
            const categories = computed(() => store.getters[`categories/${ GetterTypes.CATEGORY_LIST }`])
            const getCategories = (() => {
                store.dispatch(`categories/${ ActionTypes.GET_CATEGORIES }`).catch(() => {})
            })()

            return { localname, categories, getCategories }

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
