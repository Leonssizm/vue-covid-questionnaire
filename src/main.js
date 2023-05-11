import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

// Vee-validate
import "./plugins/vee-validate/rules";
import "./plugins/vee-validate/messages";

import store from './store/store.js';


const app = createApp(App)

app.use(router)
app.use(store)


app.mount('#app')
