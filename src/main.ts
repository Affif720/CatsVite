import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// import router functions
import { createRouter, createWebHistory } from 'vue-router'
// setup routes
const router=createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        name: 'home',
        component: () => import('./views/home-page.vue')
    },
    {
        path: '/edit-cats',
        name: 'edit-cats-info',
        component: () => import('./views/edit-cats-info-page.vue')
    },
    {
        path: '/cats-list',
        name: 'catslist',
        component: () => import('./views/catslist-page.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./views/login-page.vue')
    }
  ]
})

const app = createApp(App)

// tell Vue to use router
app.use(router)
app.mount('#app')
