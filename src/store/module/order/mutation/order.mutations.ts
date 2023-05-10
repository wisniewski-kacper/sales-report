import {OrderStateModel} from '../model';
import {OrderFormModel, OrderProductDataModel} from '@/common';

export const orderMutations = {
    setOnLoadingOrder(state: OrderStateModel) {
        state.getLoaded = false;
        state.getLoading = true;
        state.products = [];
        state.getError = null;
        state.submitLoaded = false;
        state.submitLoading = false;
        state.submitError = null;
        state.form = null;
    },

    setOnLoadedOrderGet(state: OrderStateModel, products: OrderProductDataModel[]) {
        state.getLoaded = true;
        state.getLoading = false;
        state.products = products;
        state.getError = null
    },

    setOnErrorOrderGet(state: OrderStateModel, error: string) {
        state.getLoaded = true;
        state.getLoading = false;
        state.products = [];
        state.getError = error;
    },

    setOnLoadingOrderSubmit(state: OrderStateModel) {
        state.submitLoading = true;
        state.submitLoaded = false;
        state.form = null;
        state.submitError = null;
    },

    setOnLoadedOrderSubmit(state: OrderStateModel, form: OrderFormModel) {
        state.submitLoaded = true;
        state.submitLoading = false;
        state.form = form;
        state.submitError = null;
    },

    setOnErrorOrderSubmit(state: OrderStateModel, error: string) {
        state.submitLoading = false;
        state.submitLoaded = true;
        state.form = null;
        state.submitError = error;
    }
}