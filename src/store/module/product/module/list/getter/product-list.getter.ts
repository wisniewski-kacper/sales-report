import {ProductListStateModel} from '../model';
import {ProductListItemModel} from '@/common';

export const productListGetter = {
    getList: (state: ProductListStateModel): ProductListItemModel[] => {
        return state.list;
    },

    getLoading: (state: ProductListStateModel): boolean => {
        return state.loading;
    },

    getLoaded: (state: ProductListStateModel): boolean => {
        return state.loaded;
    },

    getError: (state: ProductListStateModel): string|null => {
        return state.error;
    },
}