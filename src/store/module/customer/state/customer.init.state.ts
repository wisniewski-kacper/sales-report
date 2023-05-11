import {CustomerStateModel} from '../model';

export const customerInitState = (): CustomerStateModel => ({
    list: [],
    loaded: false,
    loading: false,
    error: null
})