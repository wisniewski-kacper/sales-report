import {reportListInitState} from './state';
import {reportListAction} from './action';
import {reportListGetter} from './getter';
import {reportListMutation} from './mutation';

export const reportListModule = {
    namespaced: true,
    state: reportListInitState(),
    actions: reportListAction,
    getters: reportListGetter,
    mutations: reportListMutation
}