import {reportDetailsInitState} from './state';
import {reportDetailsAction} from './action';
import {reportDetailsGetters} from './getter';
import {reportDetailsMutation} from './mutation';

export const reportDetailsModule = {
    namespaced: true,
    state: reportDetailsInitState(),
    actions: reportDetailsAction,
    getters: reportDetailsGetters,
    mutations: reportDetailsMutation
}