import { createApp } from 'vue'
import App from './App.vue'

import { elements, elementPlugins } from '@/libs/element-plus'

import { router } from './router'
import { store } from './store'

const app = createApp(App)

app.config.globalProperties.$ELEMENT = { size: 'mini' }
elements.forEach(el => app.component(el.name, el))
elementPlugins.forEach(plugin => app.use(plugin))

app.use(router)
app.use(store)

app.mount('#app')
