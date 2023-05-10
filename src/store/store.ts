import { createStore } from 'vuex'
import {
    customerModule,
    orderModule,
    productModule,
    reportModule
} from './module';

export default createStore({
    modules: {
        report: reportModule,
        customer: customerModule,
        product: productModule,
        order: orderModule
    },
})
