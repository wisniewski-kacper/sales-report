import {ProductEditStateModel} from '../model';

export const productEditInitState = (): ProductEditStateModel => ({
    product: null,
    getLoaded: false,
    getLoading: false,
    getError: null,
    form: null,
    submitLoaded: false,
    submitLoading: false,
    submitError: null,
})