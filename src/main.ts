import { createApp } from 'vue'
import App from './App.vue'

import { elements } from "@/libs/element-ui"

import { router } from './router'
import { createStore } from 'vuex'

interface IRootState {
    count: number
}

const store = createStore({
    state (): IRootState {
        return {
            count: 0
        }
    },
    mutations: {
        increment (state: IRootState) {
            state.count++
        }
    }
})

const app = createApp(App)

elements.forEach(el => app.use(el))

app.use(router)
app.use(store)

app.mount('#app')
