import {reportInitState} from './state';
import {reportAction} from './action';
import {reportMutation} from './mutation';
import {reportGetters} from './getter';

export const reportModule = {
    state: reportInitState,
    actions: reportAction,
    getters: reportGetters,
    mutations: reportMutation,
}