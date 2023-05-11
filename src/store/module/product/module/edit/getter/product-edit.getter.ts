import {ProductEditStateModel} from '../model';
import {ProductDataModel, ProductFormModel} from '@/common';

export const productEditGetter = {
    getForm: (state: ProductEditStateModel): ProductFormModel | null => {
        return state.form;
    },

    getSubmitLoading: (state: ProductEditStateModel): boolean => {
        return state.submitLoading;
    },

    getSubmitLoaded: (state: ProductEditStateModel): boolean => {
        return state.submitLoaded;
    },

    getSubmitError: (state: ProductEditStateModel): string | null => {
        return state.submitError;
    },

    getProduct: (state: ProductEditStateModel): ProductDataModel | null => {
        return state.product;
    },

    getGetLoading: (state: ProductEditStateModel): boolean => {
        return state.getLoading;
    },

    getGetLoaded: (state: ProductEditStateModel): boolean => {
        return state.getLoaded;
    },

    getGetError: (state: ProductEditStateModel): string | null => {
        return state.getError;
    }
}