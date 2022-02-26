import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import LoginComponent from "@/components/LoginComponent";
import SignupComponent from "@/components/SignupComponent";

const routes = [
    {
        path: '/',
        name: 'login',
        component: LoginComponent,
    },
    {
        path: '/',
        name: 'signup',
        component: SignupComponent,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;