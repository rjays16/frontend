import { createRouter, createWebHashHistory } from 'vue-router'
import LoginComponent from "@/components/LoginComponent";
import SignupComponent from "@/components/SignupComponent";
import DashboardComponent from "@/components/DashboardComponent";
const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginComponent
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupComponent,
  },
  {
    path: '/dashboard',
    name: 'dashboard/:id',
    component: DashboardComponent,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
