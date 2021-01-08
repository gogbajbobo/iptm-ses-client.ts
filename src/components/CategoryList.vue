<script lang='ts'>

    import { defineComponent, computed } from 'vue'
    import { useStore } from 'vuex'
    import { ActionTypes, GetterTypes } from '@/store/categories/types'
    import { showPrompt, showError } from '@/services/messages'

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

            return { localname, store, categories, getCategories }

        },

        methods: {
            addCategoryButtonClicked() {

                showPrompt('Название категории:', 'Добавить категорию')
                    .then(({ value: title }) => {
                        this.store.dispatch(`categories/${ ActionTypes.ADD_CATEGORY }`, { title })
                    })
                    .catch(() => {})

            },
        },

    })

</script>

<template>

    <div>

        <div>{{ localname }}</div>

        <div>
            <el-button type='primary' @click='addCategoryButtonClicked'>Добавить категорию</el-button>
        </div>

        {{ categories }}

    </div>

</template>

<style scoped>

</style>
