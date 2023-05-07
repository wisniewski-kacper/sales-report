import { createStore } from 'vuex'
import { reportModule } from './module';

export default createStore({
    modules: {
        report: {
            namespaced: true,
            state: reportModule.state(),
            actions: reportModule.actions,
            mutations: reportModule.mutations,
            getters: reportModule.getters
        }
    },
})
