import {ApiMockUtils, OrderFormModel, OrderProductDataModel} from '@/common';
import {ActionContext} from 'vuex';
import {OrderStateModel} from '../model';

export const orderAction = {
    async getProductList(context: ActionContext<OrderStateModel, never>) {
        context.commit('setOnLoadingOrder')

        try {
            await ApiMockUtils.wait(1000)

            context.commit('setOnLoadedOrderGet', list());
        } catch (e) {
            context.commit('setOnErrorOrderGet', 'Unable to load product list')
        }
    },

    async submitForm(context: ActionContext<OrderStateModel, never>, form: OrderFormModel) {
        console.log(form);
        context.commit('setOnLoadingOrderSubmit')

        try {
            await ApiMockUtils.wait(1000)

            context.commit('setOnLoadedOrderSubmit', form);
        } catch (e) {
            context.commit('setOnErrorOrderSubmit', 'Unable to create order')
        }
    }
}

const list = (): OrderProductDataModel[] => {
    return [
      product(),
      product(),
      product(),
      product(),
      product()
    ];
}

const product = (): OrderProductDataModel => {
    const id = Math.floor(Math.random() * 100) + 1;
    return {
        id: id,
        name: `Product #${id}`,
        price: Math.floor(Math.random()*10000) / 100
    }
}