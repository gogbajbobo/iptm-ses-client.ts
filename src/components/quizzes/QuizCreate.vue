<script lang='ts'>

    import { defineComponent, computed } from 'vue'
    import { useStore } from 'vuex'
    import * as categoryStore from '@/store/categories/types'
    import * as sectionStore from '@/store/sections/types'
    import { paths } from '@/router/paths'

    const localname = 'Новое тестирование'

    export default defineComponent({

        name: 'QuizCreate',
        localname,

        props: {
            categoryId: { type: [ Number, String ] },
        },

        setup(props) {

            const store = useStore()
            const categories = store.getters[`categories/${ categoryStore.GetterTypes.CATEGORY_LIST }`]
            const category = categories.find(c => c.id === Number(props.categoryId))

            if (!category)
                return { localname, category }

            const params = { category: category.id }
            const getSections = () => {
                return store.dispatch(`sections/${ sectionStore.Actions.GET_ITEMS }`, params)
            }
            getSections().catch(() => {})

            const sections = computed(() => store.getters[`sections/${ sectionStore.Getters.ITEM_LIST }`])

            return { localname, category, sections }

        },

        methods: {
            backToListButtonClicked() { this.$router.push(paths.QUIZ_LIST) }
        },

    })

</script>

<template>

    <div>

        <div>{{ localname }}</div>

        <template v-if='category'>
            <div>Категория: {{ category.title }}</div>
            {{ sections }}
        </template>

        <template v-else>
            <el-alert title='Неизвестная категория' type='error' center show-icon :closable='false'></el-alert>
        </template>

        <el-button type='text'
                   @click='backToListButtonClicked'
                   class='back-to-list-link'>К списку тестов</el-button>

    </div>

</template>

<style scoped>

    .back-to-list-link {
        margin: 16px;
    }

</style>
