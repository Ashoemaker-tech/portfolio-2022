import { createApp } from 'vue'
import AOS from 'aos'
import App from './App.vue'
import router from './router'

import '../assets/main.css'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(router)
app.use(AOS.init())

app.mount('#app')
