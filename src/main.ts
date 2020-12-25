import { createApp } from 'vue'
import App from './App.vue'

import { elements } from "@/libs/element-ui"

import { router } from './router'

const app = createApp(App)
elements.forEach(el => app.use(el))
app.use(router)

app.mount('#app')
