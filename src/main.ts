import {createApp} from 'vue'
import App from './App.vue'
import {router} from './router'
import {store} from './store'
import VueDatePicker from '@vuepic/vue-datepicker';
import VueApexCharts from "vue3-apexcharts";

import '@vuepic/vue-datepicker/dist/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.js'

createApp(App)
    .use(store)
    .use(router)
    .use(VueApexCharts)
    .component('VueDatePicker', VueDatePicker)
    .mount('#app')
