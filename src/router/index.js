import { createRouter, createWebHashHistory } from 'vue-router'
import mainApp from '../views/main-app.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: mainApp
        }
    ]
})

export default router