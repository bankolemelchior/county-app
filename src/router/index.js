import TodoApp from "@/components/TodoApp.vue"
import Galleryart from "@/components/Galleryart.vue"
import StepNavigation from "@/components/Formulaire/StepNavigation.vue"
import { createRouter, createWebHistory } from "vue-router"
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/', 
            component: TodoApp
        },
        { 
            path: '/galleryart', 
            component: Galleryart,
            children: [
                { 
                    path: '',
                    component: () => import("@/components/CarsComponent.vue"),
                },
                { 
                    path: '/Motars',
                    component: () => import("@/components/MotarsComponent.vue")
                },
                { 
                    path: '/country',
                    component: () => import("@/components/CountryComponent.vue")
                },
                { 
                    path: '/githubUsers',
                    component: () => import("@/components/GithubUsersComponent.vue")
                },
                {path: '/show-car/:carId', component: () => import ("@/components/ShowCarComponent.vue")}

            ]
        },
        { path: '/galleryart', component: Galleryart},
        { path: '/mutiStepForm', component: StepNavigation}
    ]
})
export default router
