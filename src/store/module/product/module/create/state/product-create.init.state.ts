import {ProductCreateStateModel} from '../model';

export const productCreateInitState = (): ProductCreateStateModel => ({
    form: null,
    loaded: false,
    loading: false,
    error: null,
})