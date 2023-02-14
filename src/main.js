import { install } from 'vue-router-dom'
import { createApp } from 'vue'
import App from './App.vue'
 
const app = createApp(App).use(install)
 
app.mount('#app')