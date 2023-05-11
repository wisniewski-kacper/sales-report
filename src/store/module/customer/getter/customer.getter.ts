import {CustomerStateModel} from '../model';
import {CustomerModel} from '@/common';

export const customerGetter = {
    getList: (state: CustomerStateModel): CustomerModel[] => {
        return state.list
    },

    getLoading: (state: CustomerStateModel): boolean => {
        return state.loading
    },

    getLoaded: (state: CustomerStateModel): boolean => {
        return state.loaded
    },

    getError: (state: CustomerStateModel): string | null => {
        return state.error
    }
}