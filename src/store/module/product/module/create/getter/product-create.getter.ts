import {ProductCreateStateModel} from '../model';
import {ProductFormModel} from '@/common';
export const productCreateGetter = {
    getForm: (state: ProductCreateStateModel): ProductFormModel | null => {
        return state.form;
    },

    getLoading: (state: ProductCreateStateModel): boolean => {
        return state.loading;
    },

    getLoaded: (state: ProductCreateStateModel): boolean => {
        return state.loaded;
    },

    getError: (state: ProductCreateStateModel): string|null => {
        return state.error
    }
}