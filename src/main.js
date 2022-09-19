import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.esm.browser.js'
import VueRouter from 'https://cdn.jsdelivr.net/npm/vue-router@3.6.5/dist/vue-router.esm.browser.js'
import App from './App.vue.js'
import Data from './components/Data.vue.js'

Vue.use(VueRouter)

const routes = [
    { path: '/data/:type', component: Data }
]

const router = new VueRouter({
    routes
})

new Vue({
    el: '#app',
    router,
    render: h=>h(App)
})