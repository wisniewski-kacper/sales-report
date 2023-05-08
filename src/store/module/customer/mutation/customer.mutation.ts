import {CustomerModel} from '@/common';
import {CustomerStateModel} from '../model';

export const customerMutation = {
    setOnLoadingCustomerList(state: CustomerStateModel) {
        state.loading = true;
        state.loaded = false;
        state.list = [];
        state.error = null;
    },

    setOnLoadedCustomerList(state: CustomerStateModel, list: CustomerModel[]) {
        state.loading = false;
        state.loaded = true;
        state.list = list;
        state.error = null;
    },

    setOnErrorCustomerList(state: CustomerStateModel, error: string) {
        state.loading = false;
        state.loaded = true;
        state.list = [];
        state.error = error;
    }
}