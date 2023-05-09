import {productListInitState} from './state';
import {productListGetter} from './getter';
import {productListMutation} from './mutation';
import {productListAction} from './action';

export const productListModule = {
    namespaced: true,
    state: productListInitState(),
    getters: productListGetter,
    mutations: productListMutation,
    actions: productListAction
}