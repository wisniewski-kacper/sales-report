import {ProductCreateStateModel} from '../model';
export const productCreateGetter = {
    getForm: (state: ProductCreateStateModel) => {
        return state.form;
    },

    getLoading: (state: ProductCreateStateModel) => {
        return state.loading;
    },

    getLoaded: (state: ProductCreateStateModel) => {
        return state.loaded;
    },

    getError: (state: ProductCreateStateModel) => {
        return state.error
    }
}