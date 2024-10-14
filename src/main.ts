import './index.css'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import VueCookies  from 'vue-cookies'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(PrimeVue, { theme: {preset: Aura} })
app.use(VueCookies, {expires: '7d'})

app.mount('#app')
