import { createApp } from 'vue'
import App from './App.vue'

import { ElButton } from 'element-plus'  // full import — ~650Kib build
import 'element-plus/lib/theme-chalk/index.css'

import { router } from './router'

const app = createApp(App)
app.use(ElButton)
app.use(router)

app.mount('#app')
