import {ProductListStateModel} from '../model';
import {ProductListItemModel} from '@/common';

export const productListMutation = {
    setOnLoadingProductList(state: ProductListStateModel) {
        state.loaded = false;
        state.loading = true;
        state.list = [];
        state.error = null;
    },

    setOnLoadedProductList(state: ProductListStateModel, list: ProductListItemModel[]) {
        state.loaded = true;
        state.loading = false;
        state.list = list;
        state.error = null;
    },

    setOnErrorProductList(state: ProductListStateModel, error: string) {
        state.loaded = true;
        state.loading = false;
        state.list = [];
        state.error = error;
    },
}