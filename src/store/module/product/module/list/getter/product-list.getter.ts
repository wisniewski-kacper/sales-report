import {ProductListStateModel} from '../model';

export const productListGetter = {
    getList: (state: ProductListStateModel) => {
        return state.list;
    },

    getLoading: (state: ProductListStateModel) => {
        return state.loading;
    },

    getLoaded: (state: ProductListStateModel) => {
        return state.loaded;
    },

    getError: (state: ProductListStateModel) => {
        return state.error;
    },
}