<script lang='ts'>

    import { defineComponent, computed } from 'vue'
    import { sections, getSections, categories } from '@/store/helper'
    import { paths } from '@/router/paths'

    const localname = 'Новое тестирование'

    export default defineComponent({

        name: 'QuizCreate',
        localname,

        props: {
            categoryId: { type: [ Number, String ] },
        },

        setup(props) {

            const category = categories().find(c => c.id === Number(props.categoryId))

            if (!category)
                return { localname, category }

            getSections({ category: category.id }).catch(() => {})

            return {
                localname,
                category,
                sections: computed(sections)
            }

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
