import {CustomerStateModel} from '../model';

export const customerGetter = {
    getList: (state: CustomerStateModel) => {
        return state.list
    },

    getLoading: (state: CustomerStateModel) => {
        return state.loading
    },

    getLoaded: (state: CustomerStateModel) => {
        return state.loaded
    },

    getError: (state: CustomerStateModel) => {
        return state.error
    }
}