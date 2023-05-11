import {productCreateInitState} from './state';
import {productCreateAction} from './action';
import {productCreateGetter} from './getter';
import {productCreateMutation} from './mutation';

export const productCreateModule = {
    namespaced: true,
    state: productCreateInitState(),
    actions: productCreateAction,
    getters: productCreateGetter,
    mutations: productCreateMutation
}