import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ReportView from "@/views/ReportView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    redirect: '/report'
  },
  {
    path: '/report',
    name: 'report',
    component: ReportView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
