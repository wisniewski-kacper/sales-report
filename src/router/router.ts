import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import {
    ReportDetailsView,
    ReportListView,
    ReportCreateView,
    ProductListView,
    ProductCreateView,
    ProductEditView
} from '@/views';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        redirect: '/report'
    },
    {
        path: '/product',
        name: 'product',
        children: [
            {
                path: '',
                name: 'productIndex',
                redirect: '/product/list'
            },
            {
                path: '/product/list',
                name: 'productList',
                component: ProductListView
            },
            {
                path: '/product/create',
                name: 'productCreate',
                component: ProductCreateView
            },
            {
                path: '/product/edit/:id',
                name: 'productEdit',
                component: ProductEditView
            },
        ]
    },
    {
        path: '/report',
        name: 'report',
        children: [
            {
                path: '',
                name: 'reportIndex',
                redirect: '/report/list'
            },
            {
                path: '/report/list',
                name: 'reportList',
                component: ReportListView
            },
            {
                path: '/report/create',
                name: 'reportCreate',
                component: ReportCreateView
            },
            {
                path: '/report/details/:id',
                name: 'reportDetails',
                component: ReportDetailsView
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
