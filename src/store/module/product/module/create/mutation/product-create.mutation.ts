import {ProductCreateStateModel} from '../model';
import {ProductFormModel} from '@/common';

export const productCreateMutation = {
    setOnOpenProductCreate(state: ProductCreateStateModel) {
        state.loaded = false;
        state.loading = false;
        state.error = null;
        state.form = null;
    },

    setOnLoadingProductCreate(state: ProductCreateStateModel) {
        state.loaded = false;
        state.loading = true;
        state.error = null;
        state.form = null;
    },

    setOnLoadedProductCreate(state: ProductCreateStateModel, form: ProductFormModel) {
        state.loaded = true;
        state.loading = false;
        state.error = null;
        state.form = form;
    },

    setOnErrorProductCreate(state: ProductCreateStateModel, error: string) {
        state.loaded = true;
        state.loading = false;
        state.form = null;
        state.error = error;
    }
}
