import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import LoginComponent from "@/components/LoginComponent";
import SignupComponent from "@/components/SignupComponent";
import DashboardComponent from "@/components/DashboardComponent";

const routes = [
    {
        path: '/',
        name: 'login',
        component: LoginComponent,
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignupComponent,
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: DashboardComponent,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;