import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import {ReportView, ReportListView, ReportCreateView} from '@/views';

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
    {
        path: '/list',
        name: 'list',
        component: ReportListView
    },
    {
        path: '/create',
        name: 'create',
        component: ReportCreateView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
