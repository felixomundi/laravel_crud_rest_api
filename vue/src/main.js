import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import bootstrap from "bootstrap/dist/js/bootstrap.bundle"
import  './axios'
import './assets/fontawesome/css/all.css'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faTwitter } from '@fortawesome/free-brands-svg-icons'
// import { faShopify } from '@fortawesome/free-brands-svg-icons'
// library.add(faTwitter,faShopify)


const app = createApp(App)
const pinia = createPinia()
pinia.use(({ store }) => {
    store.router = markRaw(router)
  })
app.use(pinia)
app.use(router)
// app.use(bootstrap)
// app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
