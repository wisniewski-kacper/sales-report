import {productEditInitState} from './state';
import {productEditAction} from './action';
import {productEditGetter} from './getter';
import {productEditMutation} from './mutation';

export const productEditModule = {
    namespaced: true,
    state: productEditInitState(),
    actions: productEditAction,
    getters: productEditGetter,
    mutations: productEditMutation
}