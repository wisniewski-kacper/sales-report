import {ProductListStateModel} from '../model';

export const productListInitState = (): ProductListStateModel => ({
    list: [],
    loaded: false,
    loading: false,
    error: null
})