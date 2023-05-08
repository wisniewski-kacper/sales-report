import { createStore } from 'vuex'
import { reportModule } from './module';

export default createStore({
    modules: {
        report: reportModule
    },
})
