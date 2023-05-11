import {customerInitState} from './state';
import {customerAction} from './action';
import {customerGetter} from './getter';
import {customerMutation} from './mutation';

export const customerModule = {
    namespaced: true,
    state: customerInitState(),
    actions: customerAction,
    getters: customerGetter,
    mutations: customerMutation
}