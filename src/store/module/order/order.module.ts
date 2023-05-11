import {orderInitState} from './state';
import {orderMutations} from './mutation';
import {orderGetter} from './getter';
import {orderAction} from './action';

export const orderModule = {
    namespaced: true,
    state: orderInitState(),
    mutations: orderMutations,
    getters: orderGetter,
    actions: orderAction,
}