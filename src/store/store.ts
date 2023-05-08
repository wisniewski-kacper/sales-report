import { createStore } from 'vuex'
import {customerModule, reportModule} from './module';

export default createStore({
    modules: {
        report: reportModule,
        customer: customerModule
    },
})
