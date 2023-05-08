import {CustomerStateModel} from '../model';
import {ApiMockUtils, CustomerModel} from '@/common';
import {ActionContext} from 'vuex';

export const customerAction = {
    async getList(context: ActionContext<CustomerStateModel, never>) {
        context.commit('setOnLoadingCustomerList')

        try {
            await ApiMockUtils.wait(1000)

            context.commit('setOnLoadedCustomerList', list());
        } catch (e) {
            context.commit('setOnErrorCustomerList', 'Unable to load customers list')
        }
    }
}

const list = (): CustomerModel[] => {
    return [
        customerListItem(),
        customerListItem(),
        customerListItem(),
        customerListItem(),
    ]
}

const customerListItem = (): CustomerModel => {
    const id = Math.floor(Math.random() * 100) + 1;
    return {
        id: id,
        name: `Customer #${id}`
    }
}