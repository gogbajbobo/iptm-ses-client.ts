import { createApp } from 'vue'
import App from './App.vue'

import { elements } from '@/libs/element-ui'

import { router } from './router'
import { store, key } from './store'

const app = createApp(App)

elements.forEach(el => app.use(el))

app.use(router)
app.use(store, key)

app.mount('#app')
