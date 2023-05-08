import {reportDetailsModule, reportListModule} from './module';

export const reportModule = {
    namespaced: true,
    modules:
        {
            details: reportDetailsModule,
            list: reportListModule
        }
}
