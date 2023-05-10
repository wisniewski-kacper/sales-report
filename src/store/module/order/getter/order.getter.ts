import {OrderStateModel} from '../model';
import {OrderFormModel, OrderProductDataModel} from '@/common';

export const orderGetter = {
    getProducts(state: OrderStateModel): OrderProductDataModel[] {
        return state.products;
    },

    getGetLoading(state: OrderStateModel): boolean {
        return state.getLoading;
    },

    getGetLoaded(state: OrderStateModel): boolean {
        return state.getLoaded;
    },

    getGetError(state: OrderStateModel): string|null {
        return state.getError;
    },

    getForm(state: OrderStateModel): OrderFormModel|null {
        return state.form;
    },

    getSubmitLoading(state: OrderStateModel): boolean {
        return state.submitLoading;
    },

    getSubmitLoaded(state: OrderStateModel): boolean {
        return state.submitLoaded;
    },

    getSubmitError(state: OrderStateModel): string|null {
        return state.submitError;
    }
}