import { createApp } from 'vue'
import App from './App.vue'

import { ElButton } from 'element-plus'  // full import — ~650Kib build
import 'element-plus/lib/theme-chalk/index.css'


const app = createApp(App)
app.use(ElButton)

app.mount('#app')
