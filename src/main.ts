import './assets/main.css'



import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { welcomePlugin } from './plugins/welcome'



const app = createApp(App);


app.use(createPinia())
app.use(router)
app.use(welcomePlugin(`💫 Welcome to the forecast app!`))



app.mount('#app')

