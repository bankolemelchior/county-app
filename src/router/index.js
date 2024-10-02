import { createRouter, createWebHistory } from "vue-router"
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/', 
            component: () => import("@/components/CountryComponent.vue")
        },
    ]
})
export default router
