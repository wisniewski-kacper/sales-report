import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import {store} from '../store';
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
        component: ReportView,
        beforeEnter(to, from, next) {
            store.dispatch('report/getReport')
                .then(() => next())
                .catch((error) => {
                    console.error('Error loading report:', error)
                    next('/error')
                })
        }
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
