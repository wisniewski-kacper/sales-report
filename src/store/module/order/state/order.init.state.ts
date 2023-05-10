import {OrderStateModel} from '../model';

export const orderInitState = (): OrderStateModel => ({
    products: [],
    getLoaded: false,
    getLoading: false,
    getError: null,
    form: null,
    submitLoaded: false,
    submitLoading: false,
    submitError: null,
})