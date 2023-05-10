import {ProductEditStateModel} from '../model';
export const productEditGetter = {
    getForm: (state: ProductEditStateModel) => {
        return state.form;
    },

    getSubmitLoading: (state: ProductEditStateModel) => {
        return state.submitLoading;
    },

    getSubmitLoaded: (state: ProductEditStateModel) => {
        return state.submitLoaded;
    },

    getSubmitError: (state: ProductEditStateModel) => {
        return state.submitError;
    },

    getProduct: (state: ProductEditStateModel) => {
        return state.product;
    },

    getGetLoading: (state: ProductEditStateModel) => {
        return state.getLoading;
    },

    getGetLoaded: (state: ProductEditStateModel) => {
        return state.getLoaded;
    },

    getGetError: (state: ProductEditStateModel) => {
        return state.getError;
    }
}