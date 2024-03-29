import { createRouter, createWebHashHistory } from 'vue-router'
import LoginComponent from "@/components/LoginComponent";
import SignupComponent from "@/components/SignupComponent";
import DashboardComponent from "@/components/DashboardComponent";
import TaskComponent from "@/components/TaskComponent";
import PendingComponent from "@/components/PendingComponent";
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
    name: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: '/task',
    name: 'task',
    component: TaskComponent,
  },
  {
    path: '/pending',
    name: 'pending',
    component: PendingComponent,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
