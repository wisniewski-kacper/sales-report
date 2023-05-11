import {ActionContext} from 'vuex';
import {ProductEditStateModel} from '../model';
import {ApiMockUtils, ProductDataModel, ProductFormModel} from '@/common';

export const productEditAction = {
    async getProduct(context: ActionContext<ProductEditStateModel, never>, id: number) {
        context.commit('setOnLoadingProductEditGet')

        try {
            await ApiMockUtils.wait(1000);

            context.commit('setOnLoadedProductEditGet', product(id))
        } catch (e) {
            context.commit('setOnErrorProductEditGet', 'Product not found')
        }
    },

    async editProduct(context: ActionContext<ProductEditStateModel, never>, form: ProductFormModel) {
        context.commit('setOnLoadingProductEditSubmit')

        try {
            await ApiMockUtils.wait(1000)

            context.commit('setOnLoadedProductEditSubmit', form);
        } catch (e) {
            context.commit('setOnErrorProductEditSubmit', 'Product cannot be edited')
        }
    },

    clearStore(context: ActionContext<ProductEditStateModel, never>) {
        context.commit('setOnOpenProductEditSubmit')
    }
}

const product = (id: number): ProductDataModel => {
    return {
        id,
        name: `Product #${id}`,
        price: (Math.floor(Math.random() * 10000) + 1) / 100
    }
}