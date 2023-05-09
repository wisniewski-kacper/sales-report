import {reportCreateInitState} from './state';
import {reportCreateAction} from './action';
import {reportCreateGetter} from './getter';
import {reportCreateMutation} from './mutation';

export const reportCreateModule = {
    namespaced: true,
    state: reportCreateInitState(),
    actions: reportCreateAction,
    getters: reportCreateGetter,
    mutations: reportCreateMutation
}