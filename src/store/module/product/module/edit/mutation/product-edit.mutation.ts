import {ProductEditStateModel} from '../model';
import {ProductDataModel, ProductFormModel} from '@/common';

export const productEditMutation = {
    setOnLoadingProductEditGet(state: ProductEditStateModel) {
        state.getLoading = true;
        state.getLoaded = false;
        state.product = null;
        state.getError = null;
    },

    setOnLoadedProductEditGet(state: ProductEditStateModel, product: ProductDataModel) {
        state.getLoading = false;
        state.getLoaded = true;
        state.product = product;
        state.getError = null;
    },

    setOnErrorProductEditGet(state: ProductEditStateModel, error: string) {
        state.getLoading = false;
        state.getLoaded = true;
        state.product = null;
        state.getError = error;
    },

    setOnOpenProductEditSubmit(state: ProductEditStateModel) {
        state.submitLoaded = false;
        state.submitLoading = false;
        state.submitError = null;
        state.form = null;
    },

    setOnLoadingProductEditSubmit(state: ProductEditStateModel) {
        state.submitLoaded = false;
        state.submitLoading = true;
        state.submitError = null;
        state.form = null;
    },

    setOnLoadedProductEditSubmit(state: ProductEditStateModel, form: ProductFormModel) {
        state.submitLoaded = true;
        state.submitLoading = false;
        state.submitError = null;
        state.form = form;
    },

    setOnErrorProductEdit(state: ProductEditStateModel, error: string) {
        state.submitLoaded = true;
        state.submitLoading = false;
        state.form = null;
        state.submitError = error;
    }
}
